'use strict';

const multer = require('multer');
const storage = multer.memoryStorage(); // DONT DO THIS IN PRODUCTION

module.exports = multer({ storage });
