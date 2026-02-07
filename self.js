const fs=require('fs');
/*
const {myInfo,homeAdd}= require("./information");
console.log("Hello world");
myInfo();
homeAdd();
*/
//module wrapper functions 
// function(exports, require, module,__filename, __dirname){
//     //this is wrapped by js automatically;
// }
// console.log(exports,require,module,__filename, __dirname);


//ye kaam krta h non blocking I/O modal pr
/*
fs.readFile('log.txt','utf8',(err,data)=>{
    console.log(err,data);
});*/
//mtlb ki agar hum koi 
// console.log("reading file is finised");
//aisa kch likh rhe hai to phele console waali statement run kr jaayegi kyuki, aur callback baad m chl jaayega , aisa isliye hota h kyuki jb hum kisi file ko read krte h to usme kch time lgta hai aur same time pr jo server hota h wo ye kaam kisi aur ko passon  kr deta hai aur khud lg jata hai code ko execute krne m , jb tk uske paas file ka data read on hokar nhi aata tb tk wo aur code ko execute krta rehta hai aur jaise hi data ready ho jata hai jis bnde ko ye kaam diya tha wo saara data laakr wapas server pr aa jata hai aur file ke data ko print krwa deta hai



//ab readfilesync jo hota h ye syncronously kaam krta h mtlb agar ye function phele likha h to phele yhi execute hoga chahe jitna bhi time lge hm iske data ko print kre bina aage ka code execute nhi krenge 

/*
const fileread=fs.readFileSync("log.txt");
console.log(fileread.toString());
console.log("reading file is done ");
*/

//similarly hmaare paas write file bhi hota hai jo hme faciliate krta h file k anadar likhne k liye 
/*
fs.writeFile('newFile','this is data inside new file',()=>{
    console.log("written to the file");
});*/

//similarly yha pr bhi non blocking I/O moda ko hataya ja skta h using write file sync

//readfileSync ek kaam aur krta hai ye file m phele se likhe hue data ko overlap krta h mtlb us data ko hta kr khud us jagah pr chla jata hai 

const writeFile=fs.writeFileSync('newFile','hello Priyanshu this side');
console.log(writeFile);

console.log('Finished reading file');
