const mongoose = require('mongoose');
const Schema = new mongoose.Schema({shorturl:{
    type:String,
    required:true,
    unique:true
},
actualurl:{
    type:String,
    required:true
},timestamps:true});

const urlMod = mongoose.model('urlmod', newSchema) // Collection will be made with the 'urlmod' name
model.export = {urlMod};