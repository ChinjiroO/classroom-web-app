const { MongoClient } = require("mongodb");
const MONGODB_URI =
  "mongodb://chinjiro:Chinchin1452@cluster0.aj7dr.mongodb.net/go_room?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const uri = process.env.MONGODB_URI;
var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        _db = db.db("go_room");
        console.log("Succesfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
