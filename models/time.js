const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TimeSchema = new Schema({
    player: { type: String, required: true },
    time: { type: Number, required: true },
    image: { type: Schema.ObjectId, ref: "Image", required: true }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

TimeSchema.virtual("time_formatted").get(function () {
    const totalSeconds = this.time;
    const hours = Math.floor(totalSeconds / 360000);
    const minutes = Math.floor((totalSeconds % 360000) / 6000);
    const seconds = Math.floor((totalSeconds % 6000) / 100);

    return {
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
    };
});

module.exports = mongoose.model("Time", TimeSchema);