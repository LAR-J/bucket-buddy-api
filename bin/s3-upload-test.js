'use strict';

const fs = require('fs');
const uploader = require('../lib/aws-s3-upload');
const mongoose = require('../app/middleware/mongoose');
const Upload = require('../app/models/upload');

let filename = process.argv[2] || '';
let comment = process.argv[3] || 'no comment';


const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (error, data) => {
      if (error) {
        reject(error);
      }

      resolve(data);
    });
  });
};

readFile(filename)
.then(uploader.awsUpload)
.then((response) => {
  let upload = {
    location: response.Location,
  };
  return Upload.create(upload);
})
.then(console.log)
.catch(console.error)
.then(() => mongoose.connection.close());
