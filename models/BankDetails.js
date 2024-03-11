const mongoose = require("mongoose");

let bankDetailSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    bankId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bank",
    },

    date: {
      type: Date,
    },
    checkNo: {
      type: String,
    },
    payee: {
      type: String,
    },
    memo: {
      type: String,
    },
    category: {
      type: String,
    },
    payment: {
      type: String,
    },

    deposit: {
      type: String,
    },
    balance: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("bankDetail", bankDetailSchema);
