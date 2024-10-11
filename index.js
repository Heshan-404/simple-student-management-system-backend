const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var connection = require("./utils/database.connection");
const { getStudentList, registerStudent, getNextStudentID } = require("./api/controllers/adminControllers"); 
var corsOptons = {
  origin: "http://localhost:5173/",
};
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.use("/api/get-all-student-list", getStudentList);
app.use("/api/get-new-student-id", getNextStudentID);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  connection.connect(function (err) {
    if (err) throw err;
    console.log("DB_Connected");
  });
});
