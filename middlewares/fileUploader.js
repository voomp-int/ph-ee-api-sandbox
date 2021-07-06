// const CONSTANT = require("./../config/index");
const AWS = require("aws-sdk");

/**
 * Uses multer's req.files to upload data to GCS
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const fileUploader = async (req, res, next) => {
  if (!req.file) {
    res.status(400).send({
      message: "No file uploaded.",
    });
    return;
  }

  const s3 = new AWS.S3({
    accessKeyId: "AKIAX32JM37TYBIP5XMY",
    secretAccessKey: "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",
  });

  // Setting up S3 upload parameters
  const params = {
    Bucket: "paymenthub-ee-dev",
    Key: "test.csv", // File name you want to save as in S3
    Body: JSON.stringify(req.file, null, 2),
  };

  // Uploading files to the bucket
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    req.data_location = data.Location;
    console.log(`File uploaded successfully. ${data.Location}`);
    next();
  });
};

module.exports = {
  fileUploader,
};
