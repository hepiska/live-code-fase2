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
},

addmenu:function(req,res){
  let resto_id=req.body.restoran_id;
  let food_ids=req.body.food_id.split(',');
  //console.log(food_id);
  food_ids.forEach(function(food_id){
    Restoran.findByIdAndUpdate(resto_id,{
      $push:{menulist:food_id}},
      {safe:true,upsert:true,new:true},
    function(err,data){
       if (err) {
         //console.log(err);
       } else {
         //console.log(data);
       }
    })
  })

  Restoran.findOne({
    _id:resto_id
  },function(err,data){
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })

},

removemenu:function(req,res){
  let resto_id=req.body.restoran_id;
  let food_ids=req.body.food_id.split(',');

  Restoran.findOne({
    _id:resto_id
  },function(err,data){
    if (err) {
      res.send(err)
    } else {
      food_ids.forEach(function(id){
        console.log(id);
        for (var i = 0; i < data.menulist.length; i++) {
          if (data.menulist[i]==id) {
            data.menulist.splice(i,1);
          }
        }
      })
      //console.log(data.menulist);
      data.save(function (err, data) {
           if (err) {
               res.status(500).send(err)
           }
           res.send('update success');
       });
    }
  })

},
showmenu:function(req,res){
  Restoran.findById(
    req.params.id
  ).populate('menulist')
    .exec(function(err,menu){
      res.send(menu)
    })
}


}
