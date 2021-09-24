const express = require('express');
const url = require('url');
const userRoutes = express.Router();
const dbo = require('../databases/connect');

//Get 
userRoutes.route("/user").get(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  db_connect
  .collection("users")
  .find({})
  .toArray(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//Get by googleId
userRoutes.route("/user/:googleId").get(function(req, res) {
  let db_connect = dbo.getDb("go_room");
  let myquery = { googleId: req.params.googleId};
  db_connect
  .collection("users")
  .findOne(myquery, function(err, result) {
    if(err) throw err;
    res.json(result);
  });
});

//Add users
userRoutes.route("/user/add").post(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  let obj = {    
    email: req.body.email,
    password: req.body.password,
    familyName: req.body.familyName,
    givenName: req.body.givenName,
    googleId: req.body.googleId,
    imageUrl: req.body.imageUrl
  };
  db_connect.collection("users").insertOne(obj, function (err, res){
    if(err) throw err;
  });
  console.log(obj);
})

//update users
userRoutes.route("/user/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb("go_room");
  let myquery = { id: req.body.googleId };
  let newValues = {
    $set: {
    email: req.body.email,
    password: req.body.password,
    familyName: req.body.familyName,
    givenName: req.body.givenName,
    imageUrl: req.body.imageUrl
    },
  };
  db_connect.collection("users")
            .updateOne(myquery, newValues, function (err, res){
              if(err) throw err;
              console.log("update successful");
            });
});

module.exports = userRoutes;