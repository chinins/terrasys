const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
  admRefId: {
    type: String,
    required: 'AdmRefId is required'
  },
  administration: {
    type: String,
    required: 'Administration is required'
  },
  date: {
    type: Date,
    default: Date.now
  },
  freqAssign: {
    type: Number,
    required: 'FreqAssign is required'
  },
  validation: {
    type: Boolean,
    default: false
  },
  publishing: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Notice', NoticeSchema);