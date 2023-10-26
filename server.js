const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
var app = express();

app.use(cors());

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

// Gets all the clients from the database.
app.get('/clients', (req, res) => {

    var sqlStatement = 'SELECT * FROM clients';
    dbConnect.query(sqlStatement, (err, result) => {
        if (err) {
            console.log("Client list was not retrieved from the database.");
        } else {
            console.log(JSON.stringify(result));
            res.send(JSON.stringify(result));
        }
    });
})

app.listen(8080, function(err) {
    if(err) console.log("Did not connect to server");
    console.log("Started application on port 8080");
});