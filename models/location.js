const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    character: { type: String, required: true },
    locationx: { type: String, required: true },
    locationy: { type: String, required: true },
    image: { type: Schema.ObjectId, ref: "Image" }

})

module.exports = mongoose.model("Location", LocationSchema);