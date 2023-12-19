const app = require('./server');
const config = require('./utils/config');
const { info,error } = require('./utils/logger');
const mongoose = require('mongoose');


// connect a database using mongoose
info('connecting to mongodb');
mongoose.connect(config.MONGODB_URI)
    .then(()=>{
        info('connected to mongodb');
        // let listen the server

            app.listen(config.PORT,()=>{
                console.log(`server running at http://${config.HOSTNAME}:${config.PORT}`);
            });
    })
    .catch((error)=>{
        console.log('error o connect a database',error);
    })
