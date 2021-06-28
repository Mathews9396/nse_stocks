const sql = require("../db_connection");
const csvData = require("../importFile");

const jwt = require('jsonwebtoken');
const secretKey = require('../config/auth.config');
const { password, user } = require("../config/db.config");

exports.registerUser = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // console.log(username.length);
    sql.query(
        "SELECT * FROM users where username=?",
        [username], (err, result) => {
            if (result.length > 0) {
                console.log("user already regsitered ", username);
                res.status(402).send({
                    message: "User already registered"
                })
            }
            else {
                sql.query(
                    "INSERT INTO users (username,password) VALUES (?, ?)",
                    [username, password],
                    (err, result) => {
                        if (result) {
                            console.log("added ", username, " to db");
                            res.status(200).send({
                                message: "Successfully registered!"
                            })
                        }
                        else {
                            console.log("Error - ", err);
                            res.status(402).send({
                                error: "Could not register!"
                            })
                        }
                    })
            }
        }
    )
}

exports.userLogin = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    sql.query(
        "SELECT * FROM users where username=? AND password=?",
        [username, password],
        (err, result) => {
            if (result.length > 0) {
                // console.log('User authentication approved',result);
                var jwtUser = { name: username, type: "vigilante" };
                var token = jwt.sign(jwtUser, secretKey.secret, { expiresIn: 300 * 1000 });
                if (token) {
                    console.log("User authenticated along with token");
                    res.send({
                        message: "User Authenticated...\nGet your token from console",
                        token: token
                    })
                }
                else {
                    res.status(402).send({
                        status: "fail",
                        error: "Token could not be generated"
                    })
                }
            }
            else {
                console.log("User not found!");
                res.status(404).send({
                    error: "User not found - Retry!"
                })
            }
        })
}

exports.authUserLogin = (req, res) => {
    try {
        console.log(req.body);
        const { name, password } = req.body;
        if (name === 'Batman' && password === "iambatman") {
            console.log('User authentication approved');
            var jwtUser = { name: req.body.name, type: "vigilante" };

            var token = jwt.sign(jwtUser, secretKey.secret, { expiresIn: 300 * 1000 });

            if (token) {
                res.json({ token })
            }
            else {
                res.status(402).send({
                    error: "Token could not be generated"
                })
            }
        }
        else {
            return res.status(402).send({
                status: false,
                error: "No user found - check the credentials again"
            })
        }
    } catch (err) {
        res.status(500).send({ status: false, error: "internal server error" });
    }
}

exports.getAllStocks = (req, res) => {
    var getStatament = "SELECT * FROM stocks"

    sql.query(getStatament, function (err, data) {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Customer."
            });
        else {
            console.log("getting all companies");
            res.send({
                message: "Found the records",
                data: data
            });
        }
    })
}

exports.getOneStock = (req, res) => {
    var name = req.params.company;
    console.log(name);

    var getStatament = `SELECT Name FROM stocks WHERE Name REGEXP \'^${name}\'`

    sql.query(getStatament, function (err, data) {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else {
            console.log("ran the api for getting a particular stock");
            if (data[0] == null)
                res.send({
                    message: "no records found"
                });
            else {
                res.send({
                    message: "found the records",
                    data: data
                });
            }

        }
    })
}

exports.getStockDetail = (req, res) => {
    var id = req.params.id;
    console.log(id);

    var getStatament = `SELECT * FROM stocks WHERE Sl_No=?`

    sql.query(getStatament, [id], function (err, data) {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else {
            console.log("ran the api for getting a particular stock");
            if (data[0] == null)
                res.send({
                    message: "no records found"
                });
            else {
                res.send({
                    message: "found the records",
                    data: data
                });
            }

        }
    })
}

exports.createStocks = (req, res) => {
    console.log("creating stocks table");
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

exports.createUsers = (req, res) => {
    console.log("creating users table");
    var createStatament = "CREATE TABLE users (username char(50), password char(50))"

    sql.query(createStatament, function (err) {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else {
            console.log("success");
            res.send({ message: "Table for users created" });
        }
    })
}

exports.getAllUsers = (req, res) => {
    var getStatament = "SELECT * FROM users"

    sql.query(getStatament, function (err, data) {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while getting the users."
            });
        else {
            console.log("getting all users",data);
            res.send({
                message: "Found the records",
                data: data
            });
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
