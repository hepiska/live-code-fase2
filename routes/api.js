var express = require('express');
var router = express.Router();
var FoodCon = require('../controllers/food')

router.post('/food',FoodCon.create);
router.get('/food',FoodCon.views);
router.get('/food/:id',FoodCon.view);
router.delete('/food/:id',FoodCon.delete);

module.exports=router
