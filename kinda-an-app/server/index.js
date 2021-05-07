const express = require('express');
const API = require('./api');

const app = express();
const PORT = 8081;

app.get('/api/ecommerce', (req, res) => {
  res.send(API.categories);
});

app.post('/api/cart', (req, res) => {
  setTimeout(res.status(200).send(), 800);
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
