const express = require("express");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 9000;
const app = express();
const dbo = require("./databases/connect");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

app.use(require("./routes/classroom"));
app.use(require("./routes/user"));
app.use(require("./routes/topics"));

app.listen(PORT, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${PORT}`);
});

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
