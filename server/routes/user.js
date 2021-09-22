const express = require('express');
const userRoutes = express.Router();
const dbo = require('../databases/connect');

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

module.exports = userRoutes;