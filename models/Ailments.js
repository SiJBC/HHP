const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ailmentSchema = new Schema({
  Ailment: { type: String, required: true },
  Method: { type: String, required: false  },
});

const Ailment = mongoose.model("ailments", ailmentSchema);

module.exports = Ailment;