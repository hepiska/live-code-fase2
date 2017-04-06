# live-code-fase2-hepiska

##desc
- ini adalah aplikasi untuk melakukan crud data tentang restoran dimana terdapat 2 table table restoran dan table food,
dimana setiap restoran dapat mempunyai beberapa food sebagai food

## how to run
- npm install
- nodemon app.js


###data restoran
--insert
post http://localhost:3000/api/restoran
parameter : req.body(name,owner,addres,open_status)

- get data semua restoran
get http://localhost:3000/api/restoran
paramter :
- delete data restoran
delete http://localhost:3000/api/restoran/id
paramter : req.params(resto_obj_id)
- get data satu restoran
get http://localhost:3000/api/restoran/id
paramter : req.params(resto_obj_id)
- update data restorant
put http://localhost:3000/api/restoran/id
paramter : req.params(resto_obj_id),req.body:(name/addres/owner/open_status)

###food
- insert data food
post http://localhost:3000/api/food
paramter: req.body:(name,price,expired_date)
- get data semua food
get http://localhost:3000/api/food
paramter :
- delete data food
delete http://localhost:3000/api/food/id
paramter : req.params(food_obj_id)
- get data satu food
get http://localhost:3000/api/food/id
paramter : req.params(food_obj_id)
- update data food
put http://localhost:3000/api/food/id
paramter : req.params(food_obj_id),req.body:(name,price,expired_date)

### food to restoran menu
- addmenu
post http://localhost:3000/api/addmenu
paramter: req.body:(resto_obj_id,"food_obj_id1,food_obj_id2,food_obj_idn")
- removemenu
post http://localhost:3000/api/removemenu
paramter: req.body:(resto_obj_id,"food_obj_id1,food_obj_id2,food_obj_idn")

- showmenu
get http://localhost:3000/api/removemenu:id
paramter : req.params(resto_obj_id)
