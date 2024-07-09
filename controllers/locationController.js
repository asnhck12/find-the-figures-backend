const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const Location = require("../models/location");

// View locations
exports.location_get = asyncHandler(async (req, res, next) => {
    const imageId = req.params.id;    
    try {
        const allLocations = await Location.find({ picture: imageId}).exec();
        res.json(allLocations);
    } catch (error) {
        console.error("Error fetching locations:", error); 
        next(error);
    }
});

// submit locations
exports.location_post = 
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const location = new Location({
            character: req.body.character,
            locationx: req.body.locationx,
            locationy: req.body.locationy,
            image: req.body.name

        });

        try {
            await location.save();
            res.status(201).json(location);
        } catch (error) {
            next(error);
        }
    });