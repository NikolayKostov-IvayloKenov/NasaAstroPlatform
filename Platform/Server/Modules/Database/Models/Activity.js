var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ActivityModel = require('../../../Models/Activity');

var activitySchema = new Schema(ActivityModel);

var Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;