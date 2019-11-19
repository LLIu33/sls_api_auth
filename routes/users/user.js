const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  phone: String,
  active: Boolean
});

module.exports = mongoose.model('User', userSchema);
