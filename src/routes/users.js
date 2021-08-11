var express = require('express');
var router = express.Router();
const {register, save, thankyou, deleteCookie}= require("../controllers/usersController");
const registerValidator = require("../validations/registerValidator");

/* GET users listing. */
router.get('/register', register);
router.post("/register", registerValidator, save);
router.get("/thankyou", thankyou);
router.get("/delete", deleteCookie);

module.exports = router;
