const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const Location = require("../models/location");
const Image = require("../models/image");

// View locations
exports.location_get = asyncHandler(async (req, res, next) => {
    try {
        const imageName = req.params.imageName;
        console.log(`Received imageName: ${imageName}`);
        const image = await Image.findOne({ name: imageName });
        
        if (!image) {
            return res.status(404).send('Image not found');
        }
        const locations = await Location.find({ image: image._id });
        console.log(`Locations query result: ${locations}`);
        res.json(locations);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});
