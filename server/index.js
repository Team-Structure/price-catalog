const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
