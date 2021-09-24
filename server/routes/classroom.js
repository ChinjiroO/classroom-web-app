const express = require('express');
const classroomRoutes = express.Router();
const dbo = require('../databases/connect');

// Create a new classroom
classroomRoutes.route("/classroom/add").post(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  let obj = {
    nameOfClass: req.body.nameOfClass,
    subject: req.body.subject,
    room: req.body.room
  };
  db_connect.collection("classrooms").insertOne(obj, function (err, res){
    if(err) throw err;
  });
})

//Get all of the list
classroomRoutes.route("/classroom").get(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  db_connect
      .collection("classrooms")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
			});
});

classroomRoutes.route("/classroom/:room").get(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  let myquery = { room: req.body.room };
  db_connect
      .collection("classrooms")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
			});
});

module.exports = classroomRoutes;