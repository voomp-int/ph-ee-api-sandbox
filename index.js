const express = require("express");
const routes = require("./route");
const CONFIG = require("./config/index");
const mongodb = require("./mongodb");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
