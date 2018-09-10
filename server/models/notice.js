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
  stage: {
    type: String,
    default: 'Unknown'
  },
  fragment: {
    type: String,
    default: 'GEO6'
  }
})

module.exports = mongoose.model('Notice', NoticeSchema);