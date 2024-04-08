const express = require('express');
const app = express;
const mongoose = require('mongoose');
import seeds from "./seeds";
import { ConfigService } from './configs/config';

app.listen(3000,()=>{
    console.log('server port number: 3000');
});

mongoose.connect(
  ConfigService.get('MONGO_URL'),
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log('Some problem with the connection ' + err);
        }else {
            console.log('The Mongoose connection is ready');
        }
    }
);