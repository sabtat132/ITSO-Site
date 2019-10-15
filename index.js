const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
const http = require('http');

const app = express();

const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
  res.render('home',
    {
      page: 'home',
      title:  'Home',
    }
  );
});

app.listen(8080, () => { console.log('Listening on port 8080.');} );
