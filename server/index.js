const express = require('express');
require('dotenv').config();
const path = require('path');
// eslint-disable-next-line no-unused-vars
const db = require('../database');
const router = require('./routes');

const app = express();
const hostname = process.env.HOST;
const { PORT } = process.env;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`App listening at http://${hostname}:${PORT}`);
});
