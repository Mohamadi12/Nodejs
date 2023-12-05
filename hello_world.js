//1
console.log('HELLO WORD');
//2
var http = require('http');

http.createServer(function (req, res) {
  res.write('<h1>Hello Node!!!</h1>\n'); 
  res.end(); 
}).listen(3000); 
//3
     fs.writeFile("welcome.txt","Hello Node",err=>{
         err?console.log(err):console.log("created with success")
             fs.readFile("hello.txt",(err,file)=>{
                 err?console.log(err):console.log(file)
                 
             })
             
         })
