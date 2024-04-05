const express = require('express');
const app = express;
const mongoose = require('mongoose');

app.listen(3000,()=>{
    console.log('server port number: 3000');
});

mongoose.connect(
  'mongodb://127.0.0.1:27017/testDb',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log('Some problem with the connection ' + err);
      } else {
        console.log('The Mongoose connection is ready');
      }
    }
  );