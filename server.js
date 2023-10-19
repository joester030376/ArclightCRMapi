const express = require('express');
const mysql = require('mysql2');
var app = express();

var dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',    
    database: 'arclight'
});

dbConnect.connect(function(err) {
    if(err) {
        console.log("Did not connect to database");
    } else {
        console.log("Connected to the database");
    }    
});

app.listen(8080, function(err) {
    if(err) console.log("Did not connect to server");
    console.log("Started application on port 8080");
});