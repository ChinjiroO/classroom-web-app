const express = require('express');
const ObjectId = require('mongodb').ObjectId;
const itemRoutes = express.Router();
const dbo = require('../databases/connect');

//* -----------Fetch all Items----------- 
itemRoutes.route('/items').get(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  db_connect
      .collection('items')
      .find({})
      .toArray(function (err, result) {
        res.json(result);
        if (err) throw err;
      });
})
//* -----------Post item----------- 
itemRoutes.route('/items/add').post(function (res, req) {
  let db_connect = dbo.getDb("go_room");
  let item = {
          title: req.body.title,
          description: req.body.description,
      };
  db_connect
      .collection('items')
      .insertOne(item, function (err, result){
          if (err) throw err;
      });
})
//* ----------- -----------

module.exports = itemRoutes;