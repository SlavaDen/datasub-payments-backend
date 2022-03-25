const Payment = require("./models/Payment");
const validateExpiryDate = require("./helpers/validateExpDate");

class paymentController {
  async addPayment(req, res) {
    try {
      const {
        cardNumber = "",
        expirationDate = "",
        CVV = "",
        amount = "",
      } = req.body;

      if (cardNumber.length !== 16 && !parseInt(cardNumber)) {
        res.json({ status: false, message: "Incorrect card number" });
      }
      if (!validateExpiryDate(expirationDate)) {
        res.json({ status: false, message: "Incorrect expiration date" });
      }
      if (CVV.length !== 3 && !parseInt(CVV)) {
        res.json({ status: false, message: "Incorrect CVV" });
      }
      if (!parseInt(amount)) {
        res.json({ status: false, message: "Incorrect amount" });
      }

      const payment = new Payment({
        cardNumber: cardNumber,
        expirationDate: expirationDate,
        CVV: CVV,
        amount: amount,
      });

      await payment.save();

      res.json({ RequestId: payment.id, Amount: payment.amount });
    } catch (error) {}
  }
}

module.exports = new paymentController();
