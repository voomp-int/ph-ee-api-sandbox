const express = require("express");
const router = express.Router();
const { multer } = require("./multer");
const { fileUploader } = require("./fileUploader");

const singleTransacController = require("./controllers/single_transaction.controller");
const bulkTransacController = require("./controllers/bulk_transaction.controller");

router.post(
  "/bulk/transfer",
  multer.single("data"),
  bulkTransacController.createBulkTransfer,
  fileUploader
);

router.get("/bulk/transfer", bulkTransacController.getBulkTransactionStatus);

router.post("/:mode/transfer", singleTransacController.createTransfer);

router.get("/:mode/transfer", singleTransacController.getTransactionStatus);

module.exports = router;
