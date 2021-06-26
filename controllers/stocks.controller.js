const sql = require("../db_connection");
const csvData = require("../importFile");


exports.createStocks = (req, res) => {
    var createStatament = "CREATE TABLE stocks (Sl_No int, Name char(50), Market_Price float(24), Market_Cap float(24), Stock float(24), Dividend float(24), ROCE float(24), ROE float(24), DebtToEquity float(24), EPS float(24), Reserves float(24), Debt float(24))"

    sql.query(createStatament, function (err) {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else {
            console.log("success");
            res.send({ message: "Table created" });
        }
    })
}

exports.getAllStocks = (req, res) => {
    var getStatament = "SELECT * FROM stocks"

    sql.query(getStatament, function (err, data) {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else {
            console.log("success");
            res.send({
                message: "Found the records",
                data: data
            });
        }
    })
}

exports.getOneStock = (req, res) => {
    var name = req.params.name;
    console.log(name);
    var str = new RegExp(name + '*');

    var getStatament = `SELECT Name FROM stocks WHERE Name REGEXP \'^${name}\'`

    sql.query(getStatament, function (err, data) {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else {
            console.log("ran the api for getting a particular stock");
            if(data[0]==null)
            res.send({
                message:"no records found"
            });
            else{
                res.send({
                    message: "found the records",
                    data: data
                });
            }

        }
    })
}

exports.importData = (req, res) => {
    var outputData = [];
    csvData.readFile().then(function (data) {
        if (data) {
            console.log("got the data");
            data.shift();
            console.log(data[0]);
        }
        else {
            res.status(500).send({ message: "Some error occurred while importing the CSV data." });
        }
        let insertStatement = "INSERT INTO stocks (Sl_No, Name, Market_Price, Market_Cap, Stock, Dividend, ROCE, ROE, DebtToEquity, EPS, Reserves, Debt) VALUES ?";
        sql.query(insertStatement, [data], (err, response) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Customer."
                });
            else {
                console.log("Data added");
                res.send({ message: "Data added to the table \'Stocks\'" });
            }
        })
    })
        .catch(function (err) {
            console.log(err);
        });
}

exports.deleteStocks = (req, res) => {
    var deleteStatement = "DROP TABLE stocks"

    sql.query(deleteStatement, function (err) {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else {
            console.log("success");
            res.send({ message: "Table dropped" });
        }
    })
}

exports.deleteData = (req, res) => {
    var deleteData = "TRUNCATE TABLE stocks"

    sql.query(deleteData, function (err) {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else {
            console.log("success");
            res.send({ message: "All records deleted" });
        }
    })
}
