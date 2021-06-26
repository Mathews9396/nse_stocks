const fs = require("fs");
var csvParser = require('csv-parse');

let outputData = [];

function readFile() {
	return new Promise(function (resolve, reject) {
		fs.readFile("./30 NSE Stocks Info.csv", {
			encoding: 'utf-8'
		}, function (err, csvData) {
			if (err) {
				throw (err);
			}
			csvParser(csvData, { delimiter: ',' }, function (err, data) {
				if (err) {
					reject(err);
				} else {
					// outputData = data;
					resolve(data);
					// console.log(outputData[0]);
					// return data;
				}
			});
		});
	})
}

// readFile().then(function(data) {
// 	// console.log(data[0]);
// 	return data[0];
// }).catch(function(err) {
// 	console.log(err);
// })

module.exports = { readFile };