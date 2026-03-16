const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
const url = req.url;
const method = req.method;
 const students = ["Rahul", "Priya", "Aman"];

  if(url=="/students" && method=="GET"){
   
    res.end(JSON.stringify(students));
  }
    
});

server.listen(3000,()=>{
  console.log("Server running at http://localhost:3000");
  
})