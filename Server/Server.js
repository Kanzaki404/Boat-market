const express = require("express");
const app = express();
const fileUpload = require('express-fileupload');
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const path = require("path");
const fs = require('fs');
const {getAllBoats, deleteBoat, addBoat, search} = require('./database.js');




// Middleware
app.use(express.static(__dirname + "/../build"));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes




app.get("/boats", (req, res) => {

  let urlAdded = [];
  getAllBoats((dataOrError) => {
    urlAdded = dataOrError.map((item) => {
      item.photo = `${__dirname}/assets/${item.photo}`;
      return item;
    });
    res.send(urlAdded);
  });
});


app.delete("/delete:id", (req, res) => {
   
    deleteBoat(req.params.id, dataOrError => {
    res.send(dataOrError)
  });
});

app.post('/boat', (req, res) => {

	addBoat(req.body.params, dataOrError => {
		res.send(dataOrError)
	})
})


app.get('/search', (req, res) => {
	
	search(req.query, dataOrError => {
		res.send(dataOrError)
	})
})

app.post('/upload/photo', (req, res) => {
  
  const file = req.files.file;
  file.mv(`${__dirname}/assets/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/assets/${file.name}` });
  });
});


app.get('/assets', (req, res) => {
  const obj = req.query;
  const imageName = obj[Object.keys(obj)[0]];

  const pathToImage = path.resolve(__dirname, '../Server/assets', `${imageName}`);
  // res.sendFile();
  fs.readFile(`${pathToImage}`, 'base64', (err, base64Image) => {
    // 2. Create a data URL
    const dataUrl = `data:image/jpeg;base64, ${base64Image}`;
    return res.send(`${dataUrl}`);
  });
});




app.listen(port, () => console.log("Server is listening on port " + port));
