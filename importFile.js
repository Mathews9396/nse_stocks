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

module.exports = { readFile };

// axios.interceptors.request.use(
//     config => {
//         const user = JSON.parse(localStorage.getItem('user'))
//         if (user && user.accesstoken) {
//             config.headers.authorization = `Bearer ${user.accesstoken}`;
//             return config;
//         }
//     },
//     error => {
//         return Promise.reject(error);
//     }
// )