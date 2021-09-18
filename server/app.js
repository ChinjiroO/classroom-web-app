const express = require('express');
const cors = require('cors');
// const axios = require('axios');
const path = require('path');
// require("dotenv").config({ path: "./config.env"});

const PORT = process.env.PORT || 9000;
const app = express();
// const isDev = process.env.NODE_ENV !== 'development';

// app.use(express.static(path.join(__dirname, '../client/build')))
app.use(express.json());
app.use(cors());

app.use(require('./routes/material'));

const dbo = require("./databases/connect");

app.listen(PORT, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${PORT}`);
});

