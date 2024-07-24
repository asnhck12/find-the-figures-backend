var express = require('express');
var router = express.Router();

const location_controller = require("../controllers/locationController");
const image_controller = require("../controllers/imageController");
const time_controller = require("../controllers/timeController");

/* GET image */
router.get('/image', image_controller.image_get);

/* GET locations */
router.get('/location/:imageName', location_controller.location_get);

/* GET times */
router.get('/location/:imageName/time', time_controller.time_get);

/* POST times */
router.post('/location/:imageName/time/submit', time_controller.time_post);

module.exports = router;