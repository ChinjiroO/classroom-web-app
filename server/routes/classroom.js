const express = require('express');
const ObjectId = require('mongodb').ObjectId;
const classroomRoutes = express.Router();
const dbo = require('../databases/connect');

// Create a new classroom
classroomRoutes.route("/classroom/add").post(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  let obj = {
    nameOfClass: req.body.nameOfClass,
    subject: req.body.subject,
    room: req.body.room,
    members: [req.body.members],
    leader: req.body.members,
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
//Get bt googleId
classroomRoutes.route("/classroom/:members").get(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  let myquery = { members: req.params.members };

  db_connect
      .collection("classrooms")
      .find(myquery)
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
			});
});

//Get by _id
classroomRoutes.route("/classroom/id/:id").get(function(req, res) {
  let db_connect = dbo.getDb("go_room");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
  .collection("classrooms")
  .findOne(myquery, function(err, result) {
    if(err) throw err;
    res.json(result);
  });
});

//* ----------- Update member in Classroom by classroom_id -----------
classroomRoutes.route("classroom/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb();
  let query = { _id: ObjectId( req.params.id )};
  let newMember = {
    $set: {
      members: req.body.members,
    },
  };
  db_connect
  .collection("classrooms")
  .updateOne(query, newMember, function (err, res) {
    if (err) throw err;
    console.log("1 document updated");
    response.json(res);
  });
});
//* ----------- Delete Classroom by classroom_id -----------
classroomRoutes.route("/classroom/del/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  let query = { _id: ObjectId( req.params.id )};
  db_connect.collection("classrooms").deleteOne(query, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
});

module.exports = classroomRoutes;