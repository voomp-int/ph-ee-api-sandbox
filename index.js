const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./route");
const CONFIG = require("./config/index");
const mongodb = require("./mongodb");

const app = express();

// Body Parser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Routes;
app.use("/channel", routes);

// Will be removed later. Kept for testing.
app.get("/", (req, res) => {
  res.send("Homepage"); // Placeholder
});

// Connection
(async () => {
  await mongodb.dbConnect();
  app.listen(CONFIG.PORT || 3800, () =>
    console.log("info", `Started listening on port:${CONFIG.PORT || 3800}`)
  );
})();
