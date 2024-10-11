const { rejects } = require("assert");
const connection = require("../../utils/database.connection");

exports.getStudentList = async (req, res) => {
  let sql = "SELECT * FROM student";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
exports.getNextStudentID = async (req, res) => {
  const sql = `SELECT * FROM student ORDER BY studentID DESC LIMIT 1`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (result[0].studentID != "1000000001") {
      res.json(result[0].studentID);
    } else {
      res.json(String(parseInt(result[0].studentID) + 1)); 
    }
  });
};


