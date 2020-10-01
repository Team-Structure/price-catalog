const express = require('express');
const path = require('path');
const db = require('../database');
const router = require('./routes');

const app = express();
const port = 3005;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
