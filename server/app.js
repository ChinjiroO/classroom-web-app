const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 9000;
const app = express();
const dbo = require("./databases/connect");

app.use(express.json());
app.use(cors());

app.use(require('./routes/classroom'));
app.use(require('./routes/user'));

app.listen(PORT, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${PORT}`);
});

