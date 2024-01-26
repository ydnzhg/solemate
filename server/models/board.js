const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  creator: googleid,
  public: Boolean,
  likes: Number,
  date_created: Date,
  shoes: [String],
});

// compile model from schema
module.exports = mongoose.model("board", BoardSchema);
