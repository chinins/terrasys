const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  title: String,
  required: 'Title is required'
}, {
  dateTime: Date,
  default: Date.now
})

module.exports = mongoose.model('Message', MessageSchema);