const express = require('express');
const app = express();
const port = 3000;


app.get("/sum",(req,res)=>{
  
  const a =parseInt(req.query.a);
  const b =parseInt(req.query.b);

  res.send(a+b);
  
})

app.get("/sub",(req,res)=>{
  
  const a =parseInt(req.query.a);
  const b =parseInt(req.query.b);

  res.send(a-b);
  
})

app.get("/mul",(req,res)=>{
  
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
  console.log(`Server is running on port ${port}`);
});











