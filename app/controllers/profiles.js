'use strict';

const controller = require('lib/wiring/controller');
const multer = require('app/middleware').multer;

const models = require('app/models');
const Profile = models.profile;

const upload = require('lib/aws-s3-upload');
const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Profile.find()
    .then(profiles => res.json({ profiles }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Profile.findById(req.params.id)
    .then(profile => profile ? res.json({ profile }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  let profile = Object.assign(req.body.profile, {
    _owner: req.currentUser._id,
  });
  Profile.create(profile)
    .then(profile => res.json({ profile }))
    .catch(err => next(err));
};

const uploadimg = (req, res, next) => {
  upload.awsUpload(req.file.buffer)
  .then((response) => {
    return {
      profilePicture: response.Location,
    };
  })
  .then((upload) => {
    return Profile.update(upload);
  })
  .then(upload => res.json({ upload }))
  .catch(err => next(err));
};


const update = (req, res, next) => {
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  Profile.findOne(search)
    .then(profile => {
      if (!profile) {
        return next();
      }

      delete req.body._owner;  // disallow owner reassignment.
      return profile.update(req.body.profile)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  Profile.findOne(search)
    .then(profile => {
      if (!profile) {
        return next();
      }

      return profile.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
  uploadimg,
}, { before: [
  { method: multer.single('upload[file]'), only : ['uploadimg'] },
  { method: authenticate, except: ['index', 'show'] },
], });
