const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/seller-catalog', { useMongoClient: true });

const db = mongoose.connection;
db.on('error', () => {
  console.log('Connection error');
});
db.once('open', () => {
  console.log('Mongo is connected');
});
