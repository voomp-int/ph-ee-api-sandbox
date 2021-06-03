const { SingleModel } = require("../model.schema");
const { v4: uuidv4 } = require("uuid");

/**
 * Create Bulk Transfer
 * @param {Object} req
 * @param {Object} res
 */
async function createBulkTransfer(req, res) {
  try {
    const { purpose, note, request_id, purpose } = req.body;
    const model = await new SingleModel({
      request_id: request_id,
      batch_id: uuidv4(),
      note: note,
      status: "queued",
      purpose: purpose,
      mode: req.params.mode,
      created_at: Date.now(),
    }).save();

    res.status(200).send(model);
    return;
  } catch (error) {
    console.log("Error in creating a transfer: " + error);
    res.status(500).send({
      message: "Something went wrong: " + error,
    });
    return;
  }
}

/**
 * Get Transation Status
 * @param {Object} req
 * @param {Object} res
 */
async function getBulkTransactionStatus(req, res) {
  try {
    const transaction = await SingleModel.updateMany(req.query, {
      status: "processing",
    });
    if (transaction == undefined || null) {
      res.status(404).send({
        message: "Transaction not found",
      });
      return;
    }

    const x = await SingleModel.find(req.query);
    res.status(200).send(x);
    return;
  } catch (error) {
    console.log("Error in creating a transfer: " + error);
    res.status(500).send({
      message: "Something went wrong: " + error,
    });
    return;
  }
}

module.exports = {
  createBulkTransfer,
  getBulkTransactionStatus,
};
