const express = require("express");
const router = express.Router();

const userController = require("../controllers/user")

// create a new user
router.post("/signup", userController.createUser );

// User login and validation
router.post("/login", userController.userLogin)

// fetch a single user
router.get("/:userId", userController.fetchSingleUserById )

// delete a user
router.delete("/:userId", userController.deleteUser)

module.exports = router;
