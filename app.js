const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root:__dirname});
});



app.get('/sitemap.xml', (req, res) => {
  const filePath = path.join(__dirname, 'sitemap.xml');
  res.sendFile(filePath);
})

app.use((req, res) => {
  res.status(404).send('Not found')
});

app.listen(3000, () => {
  console.log('Server start on 3000');
});