const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  personal_boards: [Number],
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
