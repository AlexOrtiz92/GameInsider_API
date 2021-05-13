const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videogamesSchema = new Schema({
  platforms: String,
  description: String,
  developer: String,
  genre: [String],
  year: String,
  order: Number,
  title: String,
  image: String
}, { versionKey: false }
);

module.exports = mongoose.model("videogames", videogamesSchema)