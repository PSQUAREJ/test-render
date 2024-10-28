const express = require('express');
const app = express();
const port = 4200;

app.get('/',(req,res)=>{
	path1 = __dirname + '/test.html';
	console.log(path1);
	res.sendFile(path1);
})

app.listen(port,()=>{
	console.log('running in port 4200');
})