const express = require('express');
const app = express();
const path = require('path');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/hoteles.html'));
});

app.get('/user', function(req, res) {
    console.log(req.query);
    	res.json({name:req.query.nombre});
});

app.listen(3000);
console.log('Almundo app and listening on port 3000');
