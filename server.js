const express = require("express");
const stocks=require("./controllers/stocks.controller");
const app = express();
const cors = require("cors");

// parse requests of content-type: application/json
app.use(express.json());

// const db = require("./models");
// db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:3000"
};

const PORT = process.env.PORT || 3000;

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to NSE Stocks" });
});

app.get("/stocks", stocks.getAllStocks, (req, res) => {
  res.json({ message: "Welcome to NSE Stocks" });
});

app.get("/stocks/:name", stocks.getOneStock
// , (req, res) => {
//   res.json({ message: "finding the company and its details" });}
);


app.post("/create-table", stocks.createStocks);

app.post("/add-data", stocks.importData);

app.post("/delete-table", stocks.deleteStocks);
app.post("/delete-data", stocks.deleteData);


// set port, listen for requests
app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});