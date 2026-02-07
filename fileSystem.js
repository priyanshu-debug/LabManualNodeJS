const fs=require('fs');
// const fd=fs.openSync("secFC", "w+");
// fs.writeSync(fd,"Hello,\n hii priyanshu");
// const buffer=Buffer.alloc(50);
// const data= fs.readSync(fd,buffer,0,buffer.length,0);
// console.log(buffer.toString('utf8',0,data));


//Syncronous calls
const rers= fs.writeFileSync("./secFC","Hello dummy",{flag:"w"});
console.log(fs.readFileSync("./secFC","utf8"));
fs.appendFileSync("./secFC","Frontend developer");
fs.renameSync("./secFC","./front");
fs.cpSync("./front","./front2");



//Asyncronous calls
/*
fs.writeFile("./secFC","Hello students",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file created successfully");
    }
});*/

/*fs.readFile("utf8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});*/

const readStream=fs.createReadStream('./front','utf8');
readStream.on('data',(chunk)=>{
    for(let char of chunk){
        console.log(char);
    }

});
readStream.on('end',()=>{
    console.log("file puri read ho gyi hai ");
})

