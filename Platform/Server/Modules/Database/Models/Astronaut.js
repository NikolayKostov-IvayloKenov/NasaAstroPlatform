var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AstronautModel = require('../../../Models/Astronaut');

var astronautSchema = new Schema(AstronautModel);

var Astronaunt = mongoose.model('Astronauts', astronautSchema);

module.exports = Astronaunt;