const hostname = "localhost", username = "root", password = "Mattsql@099", databsename = "nse_stocks";

// const hostname = "sql6.freemysqlhosting.net", username = "sql6421735", password = "2Y9xb9YZjF", databsename = "sql6421735";

// const hostname = "ba9d3dzekdvjdowe3ypg-mysql.services.clever-cloud.com", username = "uvvmzblf3g6n0ncl", password = "UqkiDMkVr5RzPCcdbJAN", databsename = "ba9d3dzekdvjdowe3ypg";

module.exports = {
    host: hostname,
    user: username,
    password: password,
    database: databsename,
    // dialect: "mysql",
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
  };

//   MYSQL_ADDON_HOST=ba9d3dzekdvjdowe3ypg-mysql.services.clever-cloud.com
// MYSQL_ADDON_DB=ba9d3dzekdvjdowe3ypg
// MYSQL_ADDON_USER=uvvmzblf3g6n0ncl
// MYSQL_ADDON_PORT=3306
// MYSQL_ADDON_PASSWORD=UqkiDMkVr5RzPCcdbJAN 
//MYSQL_ADDON_URI=mysql://uvvmzblf3g6n0ncl:UqkiDMkVr5RzPCcdbJAN@ba9d3dzekdvjdowe3ypg-mysql.services.clever-cloud.com:3306/ba9d3dzekdvjdowe3ypg