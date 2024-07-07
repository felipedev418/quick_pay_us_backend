const express = require("express");
const { isAuthenticatedUser } = require("../middlewares/auth");
const otpCtlr = require("../controllers/otpController");
const router = express.Router();

router.route("/create").post(isAuthenticatedUser, otpCtlr.create);
router.route("/verify").post(isAuthenticatedUser, otpCtlr.verify);
router.route("/send").post(isAuthenticatedUser, otpCtlr.send);

module.exports = router;
