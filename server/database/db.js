const mongoose = require("mongoose");
const URI = "";

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We are connected");
});

module.exports = {
  User: require('./models/user'),
}