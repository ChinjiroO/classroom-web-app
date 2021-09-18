const express = require('express');

const materialRoutes = express.Router();

const dbo = require('../databases/connect');

//Get 
materialRoutes.route("/materials").get(function (req, res) {
    let db_connect = dbo.getDb("materials");
    db_connect
        .collection("posts")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

module.exports = materialRoutes;