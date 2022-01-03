const router = require('express').Router();
const controller = require('../controllers/homeController');

router.get('/', controller.home);

module.exports = router;