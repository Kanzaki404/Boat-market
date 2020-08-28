const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser')
const path = require("path");
// Middleware
app.use(express.static(__dirname + '/../build'));
app.use( (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
} )

app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )




// Routes



app.get('/a', (req, res) => {
   
    res.send("ok" )
})

app.get('/boats', (req, res) => {
   
    res.send("all Boats" )
})






app.listen(port, () => console.log('Server is listening on port ' + port))