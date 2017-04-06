var Food = require('../models/food');

module.exports={
  create:function(req,res){
    Food.create({
      name:req.body.name,
      price:req.body.price,
      expired_date:req.body.expired_date
    },function(err,data){
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },
views:function(req,res){
  Food.find({

  },function(err,data){
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
},

view:function(req,res){
  Food.findOne({
    _id:req.params.id
  },function(err,data){
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
},
delete:function(req,res){
  Food.findOneAndRemove({
    _id: req.params.id
  },
    function(err,data){
      if (err) {
        res.send(err);
      } else {
        res.send('data deleted');
      }
  })
},
update:function(req,res){
  Food.findOne({
    _id:req.params.id
  },function(err,data){
    if (err) {
      res.send(err)
    } else {
      data.name=req.body.name||data.name;
      data.price=req.body.price||data.price;
      data.expired_date=req.body.expired_date||data.expired_date;
      data.save(function (err, data) {
           if (err) {
               res.status(500).send(err)
           }
           res.send('update success');
       });
    }
  })

}

}
