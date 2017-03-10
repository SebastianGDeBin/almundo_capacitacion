const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.set('views', path.join(__dirname + '/../public'));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
	res.render('hoteles', {title:'Resultado de hoteles', nameHotel:'Nombre del Hotel', titleFilter:'Regimenes'});
});

app.get('/users', function(req,res){
	res.render('users',{nombre:'nombre',edad:'edad'});
});

app.post('/users/create', function (req, res) {
	console.log(req.body);
	res.json(req.body)
});

app.listen(3000);
console.log('Almundo app and listening on port 3000');