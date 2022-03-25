const { Schema, model } = require("mongoose");

const Payment = new Schema({
  cardNumber: { type: Number, required: true },
  expirationDate: { type: String, required: true },
  CVV: { type: Number, required: true },
  amount: { type: Number, required: true },
});

module.exports = model("Payment", Payment);
