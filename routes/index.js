var express = require('express');
var router = express.Router();

const location_controller = require("../controllers/locationController");
const image_controller = require("../controllers/imageController");

/* GET image */
router.get('/image', image_controller.image_get);

/* GET locations */
router.get('/location/:imageName', location_controller.location_get);


// /* Post image */
// router.post('/image/new', image_controller.image_post);

/* Post locations */
// router.post('/new', location_controller.location_post);

module.exports = router;
