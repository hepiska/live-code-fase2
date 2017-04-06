var express = require('express');
var router = express.Router();
var FoodCon = require('../controllers/food');
var restoranCon = require('../controllers/restoran');

router.post('/food',FoodCon.create);
router.get('/food',FoodCon.views);
router.get('/food/:id',FoodCon.view);
router.delete('/food/:id',FoodCon.delete);
router.put('/food/:id',FoodCon.update);

router.post('/restoran',restoranCon.create);
router.get('/restoran',restoranCon.views);
router.get('/restoran/:id',restoranCon.view);
router.delete('/restoran/:id',restoranCon.delete);
router.put('/restoran/:id',restoranCon.update);

router.post('/addmenu',restoranCon.addmenu);
router.post('/removemenu',restoranCon.removemenu);


module.exports=router
