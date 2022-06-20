const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use("/static", express.static(path.join(parentDirectory, "/build/static")));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port =  9002

app.listen(port, () => {
  console.log('App is running...')})
