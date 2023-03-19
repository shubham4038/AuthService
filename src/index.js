const express = require('express');
const {PORT} = require('./config/serverConfig');
const userRouter = require('./routes/routes'); 

const setupAndStartServer = async(req,res,next)=>{
    const app = express();
    app.use(express.json())
    app.use('/api/v1/user',userRouter)
    app.listen(PORT,async ()=>{
        console.log(`Listenung from the server ${PORT}`)
    })
}

setupAndStartServer();