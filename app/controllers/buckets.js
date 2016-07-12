'use strict';

const controller = require('lib/wiring/controller');

const models = require('app/models');
const Bucket = models.bucket;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Bucket.find()
    .then(buckets => res.json({ buckets }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Bucket.findById(req.params.id)
    .then(bucket => bucket ? res.json({ bucket }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  let bucket = Object.assign(req.body.bucket, {
    _owner: req.currentUser._id,
  });
  Bucket.create(bucket)
    .then(bucket => res.json({ bucket }))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  Bucket.findOne(search)
    .then(bucket => {
      if (!bucket) {
        return next();
      }

      delete req.body._owner;  // disallow owner reassignment.
      return bucket.update(req.body.bucket)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  Bucket.findOne(search)
    .then(bucket => {
      if (!bucket) {
        return next();
      }

      return bucket.remove()
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
}, { before: [
  { method: authenticate, except: ['index', 'show'] },
], });
