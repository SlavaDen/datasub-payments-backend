const Router = require("express");
const controller = require("./paymentController");

const router = new Router();

router.post("/payment", controller.addPayment);

module.exports = router;
