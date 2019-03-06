const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
  firstName: String,
  lastName : String,
  middleName : String,
  email : String,
  employerId: Number,
});

const Collection = module.exports = mongoose.model('providers', collectionSchema);

/* module.exports.get = getFunction;
async function getFunction(method) {
  return await Collection.find(method);
} */
