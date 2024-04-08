const express = require('express');
import http from 'http';
const app = express;
const mongoose = require('mongoose');
import routes from "./routes/routes";
import seeds from "./seeds/index";
import { ConfigService } from './configs/config';
import { ResourceModel } from './models/resource';
import { Types } from 'mongoose';

/*const connectToMongo = () => {
    mongoose.connect(
        ConfigService.get('MONGO_URL'),
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
        },
    )
    .then(()=>{
        console.log('The Mongoose connection is ready');
    }) 
    .catch((error)=>{
        console.log('Some problem with the connection ' + error);
    })
}
*/

const appServer = http.createServer(app);
appServer.listen(ConfigService.get('API_PORT'),()=>{
    console.log(ConfigService.get('MONGO_URL'));
});

const seedRunAll = async () => {
    for (const seed of Object.values(seeds)) {
        console.log(seed);
        await seed.default();
    }
};
seedRunAll()
    .then((res) => {
        const port = ConfigService.get('API_PORT');
            app.listen(parseInt(port)).then(() => {
            console.log(`App listening on ://localhost:${port}`);
        });
    })
    .catch((err) => console.log(err));

mongoose.connect(
    //'mongodb://127.0.0.1:27017/99tech',
    ConfigService.get('MONGO_URL'),
    {
    },
)
.then(()=>{
    console.log('The Mongoose connection is ready');
}) 
.catch((err)=>{
    console.log('Some problem with the connection ' + err);
})

//module.exports = connectToMongo;