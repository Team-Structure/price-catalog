const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/seller-catalog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', () => {
  console.log('Connection error');
});
db.once('open', () => {
  console.log('Mongo is connected');
});
