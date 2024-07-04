const mongoose = require('mongoose');
const UserScheme = require('../schemes/user.schemes');

const UserModel = mongoose.model('User', UserScheme);

module.exports = UserModel;
