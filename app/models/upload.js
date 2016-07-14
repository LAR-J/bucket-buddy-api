'use strict';

const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

const Upload = mongoose.model('Upload', uploadSchema);

module.exports = Upload;
