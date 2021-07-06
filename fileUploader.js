// const CONSTANT = require("./../config/index");
const ObjectsToCsv = require("objects-to-csv");
var path = require("path");
const AWS = require("aws-sdk");
const fs = require("fs");
const { SingleModel, BulkModel } = require("./model.schema");

/**
 * Uses multer's req.files to upload data to GCS
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const fileUploader = async (req, res) => {
  const single_transaction = await SingleModel.find({
    batch_id: req.uuidd,
  });

  const total = single_transaction.length;
  var fail = 0;
  single_transaction.forEach((element) => {
    if (element.failure_reason != null) {
      fail++;
    }
  });

  const data = [{ total: total, fail: fail, successful: total - fail }];
  const csv = new ObjectsToCsv(data);
  await csv.toDisk("./test.csv");

  const filename = req.uuidd + ".csv";
  var filepath = path.join(__dirname, "/test.csv");
  const fileContent = fs.readFileSync(filepath);

  const s3 = new AWS.S3({
    accessKeyId: "AKIAX32JM37TYBIP5XMY",
    secretAccessKey: "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",
  });

  // Setting up S3 upload parameters
  const params = {
    Bucket: "paymenthub-ee-dev",
    Key: filename, // File name you want to save as in S3
    Body: fileContent,
  };

  // Uploading files to the bucket
  s3.upload(params, async (err, data) => {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
    await BulkModel.findOneAndUpdate(
      {
        batch_id: req.uuidd,
      },
      {
        total: total,
        failed: fail,
        successful: total - fail,
        file: data.Location,
      }
    );
  });

  return;
};

module.exports = {
  fileUploader,
};
