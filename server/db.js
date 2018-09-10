const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/terrasys', {
  useNewUrlParser: true
})
  .then(console.log('Connected to DB'));