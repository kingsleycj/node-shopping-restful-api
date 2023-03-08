const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check.auth")
const userController = require("../controllers/user")

// create a new user
router.post("/signup", userController.createUser );

// User login and validation
router.post("/login", userController.userLogin)

// delete a user
router.delete("/:userId", checkAuth, userController.deleteUser)

module.exports = router;
