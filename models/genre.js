var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var genreSchema = new Schema({
  name: { type: String, required: true },
});

genreSchema.virtual("url").get(() => "/catalog/genre/" + this._id);

module.exports = mongoose.model("Genre", genreSchema);
