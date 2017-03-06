const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('views', path.join(__dirname + '/../public'));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('hoteles', {title:'Resultado de hoteles', nameHotel:'Nombre del Hotel', titleFilter:'Regimenes'});
});

app.listen(3000);
console.log('Almundo app and listening on port 3000');