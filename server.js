const express = require("express");
const stocks = require("./controllers/stocks.controller");
const app = express();
const cors = require("cors");
const authJwt = require('./middleware/auth');

// parse requests of content-type: application/json
app.use(express.json());
app.use(cors());
// app.use(express.static('build'));

// const whitelist = ['http://localhost:3000', 'http://localhost:8080']
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("** Origin of request " + origin)
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("Origin acceptable")
//       callback(null, true)
//     } else {
//       console.log("Origin rejected")
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions))

const PORT = process.env.PORT || 3001;

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Defining Routes
// app.get("/", (req, res) => {});

app.get("/", (req, res) => {
  res.status(200);
});

app.get("/stocks", (req, res) => {
  res.status(200);
});

app.post('/register', stocks.registerUser, (req,res) =>{
  res.json({res});
});

app.post('/login', stocks.userLogin, (req,res) => {
  res.json({res});
})

// authJwt.verifyToken,
app.get("/stocks/all", stocks.getAllStocks, (req, res) => {
  res.json({ res: res.data });
});
app.get("/stocks/all/:id",  stocks.getStockDetail);

//authJwt.verifyToken,
app.get("/stocks/find/:company",  stocks.getOneStock);

// app.post("/sign-in", stocks.authUserLogin);

app.post("/user/create-table", stocks.createStocks);

app.post("/user/add-data", stocks.importData);

app.post("/user/delete-table", stocks.deleteStocks);

app.post("/user/delete-data", stocks.deleteData);

app.post("/user/create-users", stocks.createUsers);

app.get("/user/get-all-users", stocks.getAllUsers);

// const path = require('path');
// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'build')));
// // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });
// }

// set port, listen for requests
app.listen(`${PORT}`, () => {
  console.log(`Server is running on port ${PORT}`);
});