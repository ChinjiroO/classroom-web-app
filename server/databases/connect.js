const { MongoClient } = require("mongodb");
const Db = "mongodb+srv://chinjiro:Chinchin1452@cluster0.aj7dr.mongodb.net/go_room?retryWrites=true&w=majority";
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect (function (err,db) {
            if (db) {
                _db = db.db("materials");
                console.log("Succesfully connected to MongoDB.");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};
