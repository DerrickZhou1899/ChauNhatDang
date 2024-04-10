const express = require('express');
import http from 'http';
const app = express();
const mongoose = require('mongoose');
import routes from "./routes/routes";
import seeds from "./seeds/index";
import { ConfigService } from './configs/config';
import { ResourceModel } from './models/resource';
import { Types } from 'mongoose';

mongoose.connect(
    //ConfigService.get('MONGO_URL2'),
    'mongodb://127.0.0.1:27017/99tech',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        autoIndex: false, // Don't build indexes
        maxPoolSize: 10, // Maintain up to 10 socket connections
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4
    }
)
.then(() => { 
    console.log("Connected to DB!");
},
err => { 
    console.log(err);
});

const appServer = http.createServer(app);
appServer.listen(ConfigService.get('API_PORT'),()=>{
    console.log(ConfigService.get('MONGO_URL2'));
});

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

const listResource = async (req, res) => {
    let data = req.body;
    console.log(data.body);
    let listResources = [];
    if(data.type != ''){
        let resultSearch = await ResourceModel.find({
            type: data.type
        });
        listResources = resultSearch;
    }
    if(data.type = ''){
        let resultSearch = await ResourceModel.find({});
        listResources = resultSearch;
    }
    if(!data){
        res.status(400).send({ message: 'Error, wrong type or syntax'});
    }
    if(listResources=[]){
        return res.status(200).send({message: 'Empty list, please choose another type'});
    }
    else {
        return res.status(200).send({list: listResources});
    }
}
app.get("/list-resource", listResource );