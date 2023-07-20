const Express = require("express");
const {
  postUsers,
  deleteUsers,
  getUsers,
  putUsers,
} = require("../controllers/users.controller.js");

const router = Express.Router();

router.get("/user/:id", getUsers);

router.post("/user2", postUsers);

router.delete("/user/:id", deleteUsers);

router.put("/user/:id", putUsers);

module.exports = router;
