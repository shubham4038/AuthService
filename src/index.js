const express = require('express');
const {PORT} = require('./config/serverConfig');
const userRouter = require('./routes/routes'); 

const userRepository = require('./repository/userRepository')
const setupAndStartServer = async(req,res,next)=>{
    const app = express();
    app.use(express.json())
    app.use('/api/v1',userRouter)
    app.listen(PORT,async ()=>{
        console.log(`Listenung from the server ${PORT}`)
    })
}

setupAndStartServer();