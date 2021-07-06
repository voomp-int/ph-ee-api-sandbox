require("dotenv").config();

module.exports = {
  PORT: process.env.PORT ? process.env.PORT : 5000,
  NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : "production",
  MONGODB_URI: process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : "mongodb+srv://admin:dbpasspheedev@cluster0.jb2km.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  S3_KEY: process.env.S3_KEY,
  S3_BUCKET: process.env.S3_BUCKET,
  SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
  ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
};
