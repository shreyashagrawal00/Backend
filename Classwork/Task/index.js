const fs = require("fs");
const http = require("http");

const server = http.createServer((req,res)=>{
  if(req.url === "/favicon.ico"){
    res.end();
    return ;
  }
  const timeStamp = new Date().toLocaleString();
  const log = `${timeStamp} : ${req.url} : ${req.method}\n`;

  fs.appendFile("./cuutuu.txt",log,"utf-8",(err)=>{
    if(err){
      console.log("error found");
      res.end("erooooooor");
    }
    else{
      res.end("hellooooooooooooo");
    }
  })

  
})

server.listen(3099,()=>{
  console.log("server starteddddd!!");
  
})