const express = require('express');
const app = express;
const mongoose = require('mongoose');
import { ConfigService } from './configs/config';
app.listen(ConfigService.get('API_PORT'), () => {
    console.log('server port number: ' + ConfigService.get('API_PORT'));
});
mongoose.connect(ConfigService.get('MONGO_URL'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) {
        console.log('Some problem with the connection ' + err);
    }
    else {
        console.log('The Mongoose connection is ready');
    }
});
//# sourceMappingURL=server.js.map