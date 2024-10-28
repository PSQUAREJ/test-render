const express = require('express');
const app = express();
const port = 4200;

app.get('/',(req,res)=>{
	res.send('hello balls!');
})

app.listen(port,()=>{
	console.log('running in port 4200');
})