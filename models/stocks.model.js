module.exports = (sequelize, Sequelize) => {
  const Stocks = sequelize.define("stocks", {
    Sl_No:{
      type: Sequelize.INTEGER
    },
    Name: {
      type: Sequelize.STRING,
      defaultValue: 0
    },
    Market_Price: {
      type: Sequelize.FLOAT,
      defaultValue: 0
    },
    Market_Cap: {
      type: Sequelize.FLOAT,
      defaultValue: 0
    },
    Stock: {
      type: Sequelize.FLOAT,
      defaultValue: 0
    },
    Dividend: {
      type: Sequelize.FLOAT,
      defaultValue: 0
    },
    ROCE: {
      type: Sequelize.FLOAT,
      defaultValue: 0
    },
    ROE: {
      type: Sequelize.FLOAT,
      defaultValue: 0
    },
    DebtToEquity: {
      type: Sequelize.FLOAT,
      defaultValue: 0
    },
    EPS: {
      type: Sequelize.FLOAT,
      defaultValue: 0
    },
    Reserves: {
      type: Sequelize.FLOAT,
      defaultValue: 0
    },
    Debt: {
      type: Sequelize.FLOAT,
      defaultValue: 0
    },
  });

  return Stocks;
};








/** 
company.create = (newcompany, result) => {
  sql.query("INSERT INTO stocks SET ?", newcompany, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created company: ", { id: res.insertId, ...newcompany });
    result(null, { id: res.insertId, ...newcompany });
  });
};

company.findById = (companyId, result) => {
  sql.query(`SELECT * FROM companys WHERE id = ${companyId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found company: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found company with the id
    result({ kind: "not_found" }, null);
  });
};

company.getAll = result => {
  sql.query("SELECT * FROM companys", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("companys: ", res);
    result(null, res);
  });
};

company.remove = (id, result) => {
  sql.query("DELETE FROM companys WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found company with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted company with id: ", id);
    result(null, res);
  });
};

company.removeAll = result => {
  sql.query("DELETE FROM companys", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} companys`);
    result(null, res);
  });
};

module.exports = company;
*/