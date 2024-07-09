var express = require('express');
var router = express.Router();

const location_controller = require("../controllers/locationController");
const image_controller = require("../controllers/imageController");

/* GET image. */
router.get('/image', image_controller.image_get);

/* GET locations. */
router.get('/location', location_controller.location_get);


/* GET image. */
router.post('/image/new', image_controller.image_post);

/* post locations. */
router.post('/location/new', location_controller.location_post);

module.exports = router;
