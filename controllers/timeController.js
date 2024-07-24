const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Time = require("../models/time.js")
const Image = require("../models/image.js")

// View times
exports.time_get = asyncHandler(async (req, res, next) => {
    try {
        const imageName = req.params.imageName;
        const image = await Image.findOne({ name: imageName });

        if (!image) {
            return res.status(404).send('Image not found');
        }
        const allTime = await Time.find({ image:image._id }).sort({ time: -1}).limit(5).exec();
        res.json(allTime);
    } catch (error) {
        console.error("error retrieving times");
        next(error);
    }
});

// submit times
exports.time_post = [
    body("player", "Please enter a name more than 3 letters").trim().isLength({ min: 3 }).escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const imageName = req.params.imageName;
        const image = await Image.findOne({ name: imageName });


        console.log('Querying Image with:', req.params.id);
console.log('Found Image:', image);

        const time = new Time({
            player: req.body.player,
            time: req.body.time,
            image: image._id
        });

        try {
            const savedTime = await time.save();
            res.status(201).json(savedTime);
        } catch (error) {
            console.error("Error saving time:", error);
            next(error);
        }
    })]