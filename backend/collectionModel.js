const mongoose = require('mongoose');

ExportCollection('providers');

function ExportCollection (modelName){

  const collectionSchema = mongoose.Schema({
    firstName: String,
    lastName : String,
    middleName : String,
    email : String,
    
    employerId: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }

  });
  
  const Collection = module.exports = mongoose.model(modelName, collectionSchema);

  module.exports.get = function (callback, limit) {
    Collection.find(callback).limit(limit);
  }
}