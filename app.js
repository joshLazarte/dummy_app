const express = require("express"),
  app = express();

app.get("/", (req, res) => {
  res.send("This is a node app!");
});

app.listen(5000, () => console.log("server started on port 5000"));
