var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserModel = require('../../../Models/User');

var usersSchema = new Schema(UserModel);

var User = mongoose.model('Users', usersSchema);

module.exports = User;