const { SingleModel } = require("../model.schema");

/**
 * Create Transfer
 * @param {Object} req
 * @param {Object} res
 */
async function createTransfer(req, res) {
  try {
    const { request_id, account_number, amount, currency, note } = req.body;
    const model = await new SingleModel({
      request_id: request_id,
      account_number: account_number,
      amount: amount,
      currency: currency,
      note: note,
      fees: 0,
      tax: 0,
      status: "queued",
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
async function getTransactionStatus(req, res) {
  try {
    const transaction = await SingleModel.updateMany(req.query, {
      status: "Finished",
    });
    if (transaction == undefined || null) {
      res.status(404).send({
        message: "Transaction not found",
      });
      return;
    }
    console.log(typeof transaction);
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
  createTransfer,
  getTransactionStatus,
};
