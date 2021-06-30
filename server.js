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
  // res.sendFile(path.join(__dirname, '../build'))
  res.json({message:"Welcome to NSE Stocks"});
  // res.status(200);
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

app.get("/stocks", (req, res) => {
  res.status(200);
});
// 
app.get("/stocks/all", authJwt.verifyToken, stocks.getAllStocks, (req, res) => {
  res.json({ res: res.data });
});
app.get("/stocks/all/:id", authJwt.verifyToken, stocks.getStockDetail, (req, res) => {
  res.json({ res: res.data });
});


app.get("/stocks/find/:company", authJwt.verifyToken, stocks.getOneStock);

// app.post("/sign-in", stocks.authUserLogin);

// app.post("/user", authJwt.verifyToken, (req,res)=>{});

app.post("/user/create-table", authJwt.verifyToken, stocks.createStocks);

app.post("/user/add-data", authJwt.verifyToken, stocks.importData);

app.post("/user/delete-table", authJwt.verifyToken, stocks.deleteStocks);

app.post("/user/delete-data", authJwt.verifyToken, stocks.deleteData);

app.post("/user/create-users", authJwt.verifyToken, stocks.createUsers);

app.get("/user/get-all-users", authJwt.verifyToken, stocks.getAllUsers);

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('stocks-app/build'))
// }

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