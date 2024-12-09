const express = require("express");
const {
  login,
  getOperation,
  register,
} = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/register", register); // New route for registration
router.post("/login", login); // Route for login
router.get("/operation", auth, getOperation); // Protected route for fetching operation

module.exports = router;
