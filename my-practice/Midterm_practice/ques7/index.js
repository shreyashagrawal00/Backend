const http = require("http");

const server = http.createServer((req,res)=>{
  const url=req.url;
  const method= req.method;
  if(url=="/" && method=="GET"){
    res.end("welcome to home page");
  }
  else if (url=="/about" && method=="GET"){
    res.end("welcome to about page");
  }
});

server.listen(3000,()=>{
  console.log("server running at port http://localhost:3000");
  
})