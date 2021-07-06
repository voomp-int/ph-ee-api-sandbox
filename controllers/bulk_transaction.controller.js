const streamifier = require("streamifier");
var parse = require("csv-parser");
const { SingleModel, BulkModel } = require("../model.schema");
const { v4: uuidv4 } = require("uuid");

/**
 * Create Bulk Transfer
 * @param {Object} req
 * @param {Object} res
 */
async function createBulkTransfer(req, res) {
  try {
    const { request_id, purpose, note, checksum, data } = req.body;
    const uuidd = uuidv4();

    streamifier
      .createReadStream(req.file.buffer)
      .pipe(parse())
      .on("data", async (data) => {
        await new SingleModel({
          request_id: data.request_id,
          account_number: data.account_number,
          amount: data.amount,
          currency: data.currency,
          note: data.note,
          fees: 0,
          tax: 0,
          status: "completed",
          created_at: Date.now(),
          batch_id: uuidd,
        }).save();
      })
      .on("end", function () {
        console.log("Finish");
      });

    const model = await new BulkModel({
      request_id: request_id,
      batch_id: uuidd,
      note: note,
      status: "completed",
      purpose: purpose,
      file: req.data_location,
      created_at: Date.now(),
    }).save();

    // delete model.file;
    res.status(200).send(model);
    return;
  } catch (error) {
    console.log("Error in creating a bulk transfer: " + error);
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
    
    if (typeof(req.query.detailed) !== "undefined" && req.query.detailed === "true") {
        delete req.query.detailed;
        var transaction = await BulkModel.findOne(req.query);
    } else {
      delete req.query.detailed;
      var transaction = await BulkModel.findOne(req.query).select('-file');
    }
    
    if (transaction == null || undefined) {
      res.status(400).send({
        message: "Transaction not found",
      });
      return;
    }
    const single_transaction = await SingleModel.find({
      batch_id: transaction["batch_id"],
    });
    
    const total = single_transaction.length;
    var fail = 0;
    single_transaction.forEach((element) => {
      if (element.failure_reason != null) {
        fail++;
      }
    });
    transaction.total = total;
    transaction.failed = fail;
    transaction.successful = total - fail;
    await transaction.save();

    res.status(200).send(transaction);
    return;
  } catch (error) {
    console.log("Error in fetching bulk transfer: " + error);
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
