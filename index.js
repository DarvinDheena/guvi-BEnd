const app = require('./server');
const config = require('./utils/config');


// let listen the server

app.listen(config.PORT,()=>{
    console.log(`server running at http://${config.HOSTNAME}:${config.PORT}`);
});