//import http functionality so we can create and serve web pages via
const http = require('http');
//set some variables
const hostname = '127.0.0.1';
const port = 3000;
//create a server instance and define the return type and content //(texts)                                                         
//when you define a server like this you pass some arguements e.g. req and res which are the objects' request and response object. 
//The res is mostly the objects' statuscode,setheader, and end. As their name say they are used to specify the statuscode, headers and
//text content that you want to be //relayed back to the browser.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
//finally the running server will output to the console 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
