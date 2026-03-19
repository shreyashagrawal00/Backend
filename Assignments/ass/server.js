const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

app.use((req, res, next) => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

    fs.appendFileSync("logger.txt", log);

    next();
});

app.get("/mul",(req,res)=>{36
  
  const a =parseInt(req.query.a);
  const b =parseInt(req.query.b);

  res.send(a*b);
  
})  

app.get("/div",(req,res)=>{
  
  const a =parseFloat(req.query.a);
  const b =parseFloat(req.query.b);

  res.send(a/b);
  
})



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});