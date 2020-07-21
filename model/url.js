var mongoose = require('mongoose');

// Comment Model
var urlSchema =new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {type: String, default: Date.now()}
    

   });



const URL = mongoose.model('urls',/*collection name*/ urlSchema)
module.exports = URL;