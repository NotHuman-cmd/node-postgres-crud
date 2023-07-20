const Express = require("express");

const {
  getEmployees,
  postEmployees,
  putEmployees,
  deleteEmployees,
} = require("../controllers/employees.controller");
const router = Express.Router();

router.get("/employees", getEmployees);

router.post("/employees", postEmployees);

router.put("/employees/:id", putEmployees);

router.delete("/employees", deleteEmployees);

module.exports = router;
