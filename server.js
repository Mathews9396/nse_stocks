const express = require("express");
const stocks = require("./controllers/stocks.controller");
const app = express();
const cors = require("cors");
const authJwt = require('./middleware/auth');

// parse requests of content-type: application/json
app.use(express.json());
app.use(express.static('build'));

const whitelist = ['http://localhost:3000', 'http://localhost:8080']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

const PORT = process.env.PORT || 3001;

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Defining Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to NSE Stocks" });
});

// authJwt.verifyToken,
app.get("/stocks/all", stocks.getAllStocks, (req, res) => {
  res.json({ res: res.data });
});

//authJwt.verifyToken,
app.get("/stocks/find/:company",  stocks.getOneStock);

app.get("/stocks/all/:id",  stocks.getStockDetail);

app.post('/register', stocks.registerUser, (req,res) =>{
  res.json({res});
});

app.post('/login', stocks.userLogin, (req,res) => {
  res.json({res});
})

app.post("/sign-in", stocks.authUserLogin);

app.post("/create-table", stocks.createStocks);

app.post("/add-data", stocks.importData);

app.post("/delete-table", stocks.deleteStocks);

app.post("/delete-data", stocks.deleteData);

const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// set port, listen for requests
app.listen(3001, () => {
  console.log(`Server is running on port ${PORT}`);
});