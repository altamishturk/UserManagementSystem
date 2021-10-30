const express = require('express');
const router = express.Router();
const services = require('../services/router');
const controllar = require('../controlar/controlar');

// get request from root route 
router.get('/', services.homeRoutes);

// get request from /add-user route 
router.get('/add-user', services.add_user);

// get request from /update-user route 
router.get('/update-user', services.update_user);


// request from 
router.post('/api/users', controllar.create);
router.get('/api/users', controllar.find);
router.put('/api/users/:id', controllar.update);
router.delete('/api/users/:id', controllar.delete);


// exporting router module 
module.exports = router;
