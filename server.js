const express = require("express");
const stocks = require("./controllers/stocks.controller");
const app = express();
const cors = require("cors");
const authJwt = require('./middleware/auth');

// parse requests of content-type: application/json
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Defining Routes
// app.get("/", (req, res) => {});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to NSE Stocks" });
});

app.get("/stocks", (req, res) => {
  res.status(200);
});

app.post('/register', stocks.registerUser, (req, res) => {
  res.json({ res });
});

app.post('/login', stocks.userLogin, (req, res) => {
  res.json({ res });
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

app.post("/user/create-table", stocks.createStocks);

app.post("/user/add-data", stocks.importData);

app.post("/user/delete-table",stocks.deleteStocks);

app.post("/user/delete-data", stocks.deleteData);

// app.post("/user/create-users", authJwt.verifyToken, stocks.createUsers);

// app.get("/user/get-all-users", authJwt.verifyToken, stocks.getAllUsers);


app.listen(`${PORT}`, () => {
  console.log(`Server is running on port ${PORT}`);
});