const express = require('express');
const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async(req,res,next)=>{
    const app = express();
    
    app.listen(PORT,()=>{
        console.log(`Listenung from the server ${PORT}`);
    })
}

setupAndStartServer();