// **** START Imports ****
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
// **** END Imports ****

// **** START SERVER ****
mongoose.Promise = global.Promise;
mongoose.connect(config.uri,  { useNewUrlParser: true }, (err) => {
  if(err) {
    console.log('Could NOT connect to database: ', err);
  }
  else {
    console.log('Connected to datase: ', config.db );
  }
});

app.use(express.static(__dirname + '/ang-client/dist/ang-client/'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/ang-client/dist/ang-client/index.html'));
});

app.listen(8080, ()=> {
  console.log('Listening on port 8080');
});