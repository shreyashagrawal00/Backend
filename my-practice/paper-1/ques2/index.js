const fs = require('fs');

const data1={
  Student : "Rahul",
  Marks: 85
}

const data2={
Student: "Priya", Marks: 92,
Student: "Aman", Marks: 78
}

fs.writeFileSync("students.txt",JSON.stringify(data1));
const data  = fs.readFileSync("students.txt","utf-8" ,{flag:"r"});

fs.appendFileSync("students.txt",JSON.stringify(data2));

const data3=fs.readFileSync("students.txt","utf-8")

console.log(data);


console.log(data3);
