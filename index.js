var express = require('express');
var app = express();

app.use(express.static('public'))

var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '',  
  database : 'test'  
});        

app.get('/json', function (req, res) {
  connection.connect();  

  connection.query('SELECT * FROM postres', function(err, rows, fields)   
  {  
      connection.end();

      if (err) throw err;  

      res.json(rows); 

  });
});

app.listen(3000, function () {
  console.log('Puerto 3000!');
});