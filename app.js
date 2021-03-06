const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('/oldKeyboard', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'oldKeyboard.html'));
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;
