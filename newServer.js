
const fs = require('fs');
const url = require('url'); 
const http = require('http');
const path=require('path');

http.createServer((req, res) => { 
    
    const parsedUrl = url.parse(req.url, true);
    const date = new Date().toLocaleString(); 

    const logEntry = `${date} | Path: ${parsedUrl.pathname} : New Request Received\n`;

    fs.appendFile("Log.txt", logEntry, (err) => {
        if (err) 
            console.log("Log write error:", err);
    });

    let filePath='';


    switch(parsedUrl.pathname) {
        case '/':
            filePath=path.join(__dirname,'index.html');
            break;
        case '/aboutUs':
            filePath=path.join(__dirname,'aboutUs.html');
            break;
        case '/contactUs':
            filePath=path.join(__dirname,'contactUS.html');
            break;
        case '/Services':
            filePath=path.join(__dirname,'Services.html');
            break;
        default:
            res.end("<h1>404 Page Not Found</h1>");
            return;
    }

    fs.readFile(filePath, (err,data)=>{
        if(err){
            res.writeHead(500,{'conten-type': 'text/plain'});
            
            res.end("Server Error : File missing or corrupted.");

        }
        else{
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });

}).listen(5000, 'localhost', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Server is listening on http://localhost:5000");
    }
});
//about us
//contact
//services




