const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
  firstName: String,
  lastName : String,
  middleName : String,
  email : String,
  employerId: Number,
});

const Collection = module.exports = mongoose.
model('providers', collectionSchema);

module.exports.get = function (callback, limit) {
  Collection.find(callback).limit(limit);
}
