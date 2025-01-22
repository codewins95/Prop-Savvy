const express = require('express');
const router = express.Router();
const upload = require('../Middleware/Multer')
const { createLocation, findAllLocations, updateLocation, findOneLocation, deleteLocation } = require('../controllers/location.controller');
const { createPropertyType, findAllPropertyTypes, findOnePropertyType, updatePropertyType, deletePropertyType } = require('../controllers/propertyType.controller');
const { createHero, findAllHeros, findOneHero, updateHero, deleteHero, updateHeroStatus } = require('../controllers/hero.controller');
const { createProperty, findAllProperties, findPropertyBySlug, findOneProperty, findPropertyByLocationAndPropertyType, updateProperty, deleteProperty } = require('../controllers/property.controller');
const { createInquery, findAllInquerys } = require('../controllers/inquery.controller');

// Create a new location
router.post('/create_location', createLocation);
router.get('/get_locations', findAllLocations);
router.get('/get_location/:id', findOneLocation);
router.put('/update_location/:id', updateLocation);
router.delete('/delete_location/:id', deleteLocation);

// propertytype routes here 
router.post('/create_propertyType', createPropertyType);
router.get('/get_propertyTypes', findAllPropertyTypes);
router.get('/get_propertyType/:id', findOnePropertyType);
router.put('/update_propertyType/:id', updatePropertyType);
router.delete('/delete_propertyType/:id', deletePropertyType);

// hero route from here 
router.post('/create_hero', upload.single('image'), createHero);
router.get('/get_heroes', findAllHeros);
router.get('/get_hero/:id', findOneHero);
router.put('/update_hero/:id', upload.single('image'), updateHero);
router.delete('/delete_hero/:id', deleteHero);

// property routes here 
router.post('/create_property', upload.single('image'), createProperty);
router.get('/get_properties', findAllProperties);
router.get('/get_property/:id', findOneProperty);
router.get('/get_property', findPropertyByLocationAndPropertyType);
router.get('/get_property/:slug', findPropertyBySlug);
router.put('/update_property/:id', upload.single('image'), updateProperty);
router.put('/update_hero_status/:id', updateHeroStatus);
router.delete('/delete_property/:id', deleteProperty);

// inquery routes here
router.post('/create_inquery', createInquery);
router.get('/get_inqueries', findAllInquerys);

module.exports = router;