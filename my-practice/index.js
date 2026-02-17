const fs = require("fs");
const http = require("http");

const server = http.createServer((req,res)=>{
  const timestamp = new Date().toLocaleString();
  const log = `${timestamp} : ${req.url}\n`;
 fs.appendFile("./cutu.txt", log, "utf8", (err) => {
  
    res.end("hellooooooooooo");
  });

});

server.listen(3000, ()=>{
  console.log("server started:");
  
})