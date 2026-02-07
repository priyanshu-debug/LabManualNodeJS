// const http=require("http");
// const fs=require("fs");
// http.createServer((request,response)=>{
//     const Date=new Date().toLocaleString();
//     // const date=new Date(timeStamp).toString();

//     fs.appendFile('log.txt',`${Date}} new request recorded\n`, (err)=>{
//         if(err){
//             console.log(err);
//         }
//     });
//     response.setHeader("hello","priyanshu");
//     response.write("Serevr created successfully");
//     response.end();


// }).listen(8000,"localhost",(err)=>{
//     if(err){
//         console.log("err");
//     }
//     else{
//         console.log("Server is listening on http://localhost:3000");
//     }
// });

// const http = require("http");
// const fs = require("fs");

// http.createServer((req, res) => {
//     const date = new Date().toLocaleString(); 

//     fs.appendFile(
//         "Log.txt",
//         `${date} : New Request Received\n`,
//         (err) => {
//             if (err) console.log("Log write error:", err);
//         }
//     );

//     res.write("Server Created!!");
//     res.end();

// }).listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });






const fs = require("fs");
const http = require("http");
http.createServer((req,res)=>{
    console.log("req recieved");
    res.end("OKKK done byee");
}).listen("8006","localhost",(err)=>{
    if(err) {
        console.log(err);
    }
    console.log("Server is listening on https://localhost:8006");
})