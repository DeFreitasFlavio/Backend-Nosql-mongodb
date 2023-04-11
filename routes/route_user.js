const express = require("express");

// Import du controller user pour gérer les actions.
const userCtrl = require("../controllers/user");
const middleware = require('../middlewares/auth');

const router = express.Router();

// /api/auth/routeActionController.
router.post("/register",middleware, userCtrl.register);
router.post("/login",middleware, userCtrl.login);



module.exports = router;