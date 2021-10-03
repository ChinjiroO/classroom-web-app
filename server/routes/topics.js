const express = require("express");
const ObjectId = require("mongodb").ObjectId;
const topicRoutes = express.Router();
const dbo = require("../databases/connect");

//* -----------Create a new topic-----------
topicRoutes.route("/topics/add").post(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  let topic = {
    title: req.body.title,
    classroom_id: ObjectId(req.body.classroom_id),
    items: [
      {
        Ititle: '',
        description: '',
        attachments: '',
      },
    ],
  };
  db_connect.collection("topics").insertOne(topic, function (err, result) {
    if (err) throw err;
  });
});
//* -----------Fetch All Topics -----------
classroomRoutes.route("/topics").get(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  db_connect
      .collection("topics")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
			});
});
//* -----------Fetch Topics by current classroom_id -----------
topicRoutes.route("/topics/:classroom_id").get(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  let query = { classroom_id: ObjectId(req.params.classroom_id) };
  db_connect
    .collection("topics")
    .find(query)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
//* ----------- Update topic where _id -----------

//* ----------- Delete topic where _id -----------
topicRoutes.route("/topics/:id").delete((req, res) => {
  let db_connect = dbo.getDb("go_room");
  let query = { _id: ObjectId( req.params.id )};
  db_connect.collection("topics").deleteOne(query, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
})
module.exports = topicRoutes;
