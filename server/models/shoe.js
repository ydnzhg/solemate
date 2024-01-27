const mongoose = require("mongoose");

const ShoeSchema = new mongoose.Schema({
  name: String,
  image: String,
  brand: String,
  description: String,
  price: Number,
  color: String,
  shoe_id: String,
});

// compile model from schema
module.exports = mongoose.model("shoe", ShoeSchema);
