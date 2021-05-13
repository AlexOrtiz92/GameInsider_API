const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: { type: String, required: [true, "email cannot be blank"] },
  nickname: String,
  password: { type: String, required: [true, "Password cannot be blank"] },
  videogames: {
    past: [String],
    present: [String],
    future: [String]
  }
}, { versionKey: false }
);

module.exports = mongoose.model("users", usersSchema);