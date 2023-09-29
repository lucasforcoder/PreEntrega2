const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  purchase_datetime: { type: Date, required: true },
  amount: { type: Number, required: true },
  purchaser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Otros campos relacionados con los tickets, si es necesario
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
