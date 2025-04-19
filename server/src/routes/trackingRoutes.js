const express = require('express');
const router = express.Router();
const trackingController = require('../controllers/trackingController');

router.get('/api/getData', trackingController.getAllTracking);
//router.post('/', trackingController.createTracking);
router.post('/api/profile', trackingController.profileCreation);
module.exports = router;
