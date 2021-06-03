const express = require("express");
const router = express.Router();

const singleTransacController = require("./controllers/single_transaction.controller");
const bulkTransacController = require("./controllers/bulk_transaction.controller");

router.post("/:mode/transfer", singleTransacController.createTransfer);

router.get("/:mode/transfer", singleTransacController.getTransactionStatus);

router.post("/:mode/bulk/transfer", bulkTransacController.createBulkTransfer);

router.get(
  "/:mode/bulk/transfer",
  bulkTransacController.getBulkTransactionStatus
);

module.exports = router;
