const express = require('express');
import http from 'http';
const app = express();
import cors from 'cors';
const mongoose = require('mongoose');
import routes from "./routes/routes";
import seeds from "./seeds/index";
import { ConfigService } from './configs/config';
import UserService, { ResourceModel } from './models/resource';
import { Types } from 'mongoose';


mongoose.connect(
    ConfigService.get('MONGO_URI'),
    {
    }
)
.then(() => { 
    console.log('Connect db success');
},
err => { 
    console.log(err);
});

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const appServer = http.createServer(app);
appServer.listen(ConfigService.get('API_PORT'),()=>{
    console.log('url test postman: http://127.0.0.1:8080/user/...');
});
Object.entries(routes).forEach(
    ([name, routes]) => app.use(`/${name}`, routes)
);
const seedRunAll = async () => {
    for (const seed of Object.values(seeds)) {
        await seed.default();
    }
};
seedRunAll()
.then(()=> {
    console.log('Seed db done' );
})
.catch((err) => {
    console.log(err);
});
