var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/admin');
 
//  console.log("Your connection is:",connection);
module.exports = connection;