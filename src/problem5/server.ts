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
import { title } from 'process';

mongoose.connect(
    //ConfigService.get('MONGO_URL2'),
    'mongodb://127.0.0.1:27017/99tech',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(() => { 
    console.log("Connected to DB!");
},
err => { 
    console.log(err);
});

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const appServer = http.createServer(app);
appServer.listen(ConfigService.get('API_PORT'),()=>{
    console.log(ConfigService.get('MONGO_URL'));
    console.log(ConfigService.get('API_PORT'));
});
Object.entries(routes).forEach(
    ([name, routes]) => app.use(`/${name}`, routes)
);
const seedRunAll = async () => {
    for (const seed of Object.values(seeds)) {
        console.log(seed);
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

/*
app.get("/list-resource", listResource );
app.post("/create-resource", createResource );
app.get("/list-all", listAll);
app.post("/update-resource2", updateResource);
app.delete("/delete-one", deleteOne);
app.delete("/delete-many", deleteMany);*/