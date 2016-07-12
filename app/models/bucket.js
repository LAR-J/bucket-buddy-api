'use strict';

const mongoose = require('mongoose');

const bucketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  category: {
    type: String,
    required: true,
    enum: {
      values: ['outdoor', 'sport', 'travel', 'work', 'family', 'food', 'culture', 'entertainment', 'shopping'],
    },
  },
  link: String,
  tags: [String],
  deadline: Number,
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

const Bucket = mongoose.model('Bucket', bucketSchema);

module.exports = Bucket;
