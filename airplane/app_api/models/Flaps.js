var mongoose = require('mongoose');

var climbTable = new mongoose.Schema({
weight: Number,
vfri5: Number,
vfri10: Number,
vfri15: Number,
vclimb: Number,
});

mongoose.model('ClimbTable', climbTable,'climbTables');

var airportTable = new mongoose.Schema({
   City: String,
   FAA: String,
   ITA: String,
   ICAO: String,
   Name: String,
   Role: String,
   Enpl: Number
   
   
});

mongoose.model('AirportTable', airportTable, 'airportTable');

/*
var LandingTable = new mongoose.Schema({
flaps = String,
weight= number,
vapp = number,
vref = number,
vga = number,
});

mongoose.model('LandingTable', landingTable, 'landingTables')

*/

