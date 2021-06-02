const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CONSTANTS = require("./config/constants");

const singleSchema = new Schema({
  request_id: {
    type: String,
    required: true,
  },
  account_number: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  fees: {
    type: Number,
  },
  status: {
    type: String,
  },
  mode: {
    type: String,
  },
  batch_id: {
    type: String,
    default: null,
  },
  failure_reason: {
    type: String,
    default: null,
  },
  created_at: {
    type: Date,
  },
});

module.exports = {
  SingleModel: mongoose.model(CONSTANTS.MODELS.SINGLE_TRANSAC, singleSchema),
};
