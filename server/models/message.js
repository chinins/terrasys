const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  title:{
    type: String,
    required: 'Title is required'
  }
}, {
  dateTime:{
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Message', MessageSchema);