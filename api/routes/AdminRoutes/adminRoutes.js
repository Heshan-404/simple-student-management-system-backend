const express = require("express");
const router = express.Router();
const adminControleller = require("../../controllers/adminControllers");

router.get("/get-all-students", adminController.getStudentList);
export default router;
