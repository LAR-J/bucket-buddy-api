'use strict';

// const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
  },
  dob: {
    type: Date,
    match: /\d{4}-\d{2}-\d{2}/
  },
  gender: {
    type: String,
    enum: {
      values: ['f', 'm', 'n', 'o'],
    },
  },
  city: {
    type: String,
  },
  aboutMe: {
    type: String,
  },
  profilePicture: {
    type: String
  }
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

profileSchema.virtual('age').get(function() {
  let today = new Date();
  let thisYear = today.getFullYear();
  if (!this.dob) {
    return 0;
  }
  if (this.dob.getMonth() > today.getMonth() ||
      this.dob.getMonth() === today.getMonth() &&
      this.dob.getDate() >= today.getDate()) {
        thisYear -= 1;
      }

      return thisYear - this.dob.getFullYear();
});

// model
let Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
