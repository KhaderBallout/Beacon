const mongoose = require("mongoose");
const URI = "mongodb+srv://mays:123456789Root@beaconv02.8aghd.mongodb.net/BeaconV02?retryWrites=true&w=majority";

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We are connected");
});

module.exports = {
  message: require('./models/message'),
}