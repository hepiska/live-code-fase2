var Restoran = require('../models/restoran');

module.exports={
  create:function(req,res){
    //console.log(req.body);
    Restoran.create({
      name:req.body.name,
      owner:req.body.owner,
      addres:req.body.addres,
      open_status:req.body.open_status,
    },function(err,data){
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },
views:function(req,res){
  Restoran.find({

  },function(err,data){
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
},

view:function(req,res){
  Restoran.findOne({
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
  Restoran.findOneAndRemove({
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
  Restoran.findOne({
    _id:req.params.id
  },function(err,data){
    if (err) {
      res.send(err)
    } else {
      data.name=req.body.name||data.name;
      data.owner=req.body.owner||data.owner;
      data.addres=req.body.addres||data.addres;
      data.open_status=req.body.open_status||data.open_status;
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
