const express = require("express");
const ObjectId = require("mongodb").ObjectId;
const topicRoutes = express.Router();
const dbo = require("../databases/connect");

//* -----------Fetch Topics by current classroom_id -----------
topicRoutes.route("/topics/:classroom_id").get(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  let query = { classroom_id: ObjectId(req.params.classroom_id)}
  db_connect
    .collection("topics")
    .find(query)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
//* -----------Create a new topic-----------
topicRoutes.route("/topics/add").post(function (res, req) {
  let db_connect = dbo.getDb("go_room");
  let topic = {
    title: req.body.title,
    classroom_id: req.body.classroom_id,
  };
  db_connect.collection("topics").insertOne(topic, function (err, result) {
    if (err) throw err;
  });
});
//* ----------- Update topic where _id -----------

//* ----------- Delete topic where _id -----------

module.exports = topicRoutes;
