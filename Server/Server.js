const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const path = require("path");
const {getAllBoats, deleteBoat, addBoat, search} = require('./database.js');




// Middleware
app.use(express.static(__dirname + "/../build"));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes



app.get("/boats", (req, res) => {
    
    getAllBoats(dataOrError => {
		res.send(dataOrError)
	});
});

app.delete("/delete", (req, res) => {
    console.log('test',req.query.id)
    deleteBoat(req.query.id, dataOrError => {
    res.send(dataOrError)
  });
});

app.post('/addBoat', (req, res) => {
  console.log(req.body.params)
	addBoat(req.body.params, dataOrError => {
		res.send(dataOrError)
	})
})


app.get('/search', (req, res) => {
	
	search(req.query, dataOrError => {
		res.send(dataOrError)
	})
})









app.listen(port, () => console.log("Server is listening on port " + port));
