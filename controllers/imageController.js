const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const Image = require("../models/image.js")

// View images
exports.image_get = asyncHandler(async (req, res, next) => {
    try {
        const allImage = await Image.find().exec();
        res.json(allImage);
    } catch (error) {
        next(error);
    }
});

// submit images
exports.image_post = 
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const image = new Image({
            name: req.body.name
        });

        try {
            await image.save();
            res.status(201).json(image);
        } catch (error) {
            next(error);
        }
    });