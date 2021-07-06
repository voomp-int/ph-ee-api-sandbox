const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CONSTANTS = require("./config/constants");

const singleSchema = new Schema({
  request_id: {
    type: String,
  },
  account_number: {
    type: String,
  },
  amount: {
    type: Number,
  },
  currency: {
    type: String,
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
  purpose: {
    type: String,
  },
  failure_reason: {
    type: String,
    default: null,
  },
  created_at: {
    type: Date,
  },
});

const bulkSchema = new Schema({
  request_id: {
    type: String,
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
  purpose: {
    type: String,
  },
  failure_reason: {
    type: String,
    default: null,
  },
  total: {
    type: Number,
  },
  successful: {
    type: Number,
  },
  failed: {
    type: Number,
  },
  file: {
    type: String,
  },
  created_at: {
    type: Date,
  },
});

module.exports = {
  SingleModel: mongoose.model(CONSTANTS.MODELS.SINGLE_TRANSAC, singleSchema),
  BulkModel: mongoose.model(CONSTANTS.MODELS.BULK_TRANSAC, bulkSchema),
};
