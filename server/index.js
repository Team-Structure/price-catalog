const express = require('express');
const path = require('path');
// eslint-disable-next-line no-unused-vars
const db = require('../database');
const router = require('./routes');

const app = express();
const port = 3002;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/api', router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
