const express = require('express');
const app = express();
const {connectionDb} =require('./Config/db.js');
// const {router} = require('./Routes/urlRoute.js')
connectionDb('mongodb://127.0.0.1:27017/urlShortDb')
.then(()=>console.log("mongodb connected")).catch(err=>console.log(err));

app.listen(3003,()=>{
    console.log("Server started at port 3003")
})