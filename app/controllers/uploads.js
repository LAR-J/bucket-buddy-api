'use strict';

const controller = require('lib/wiring/controller');
const middleware = require('app/middleware');
const multer = middleware.multer;

const models = require('app/models');
const Upload = models.upload;

const uploader = require('lib/aws-s3-upload');

const authenticate = require('./concerns/authenticate');

const create = (req, res, next) => {
  uploader.awsUpload(req.file.buffer)
  .then((response) => {
    return {
      location: response.Location,
    };
  })
  .then((upload) => {
    return Upload.create(upload);
  })
  .then(upload => res.json({ upload }))
  .catch(err => next(err));
};

module.exports = controller({
  create,
}, { before: [
  { method: authenticate },
  { method: multer.single('upload[file]'), only: ['create'] },
], });
