const http=require('http');
http.createServer((res,req)=>{
    res.write("server created successfully");
    res.end("server ended successfully");
}).listen(4000,'localHost',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is listening on http://localhost:4000");
    }
});