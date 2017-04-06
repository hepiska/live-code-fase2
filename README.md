# live-code-fase2-hepiska

##desc
- ini adalah aplikasi untuk melakukan crud data tentang restoran dimana terdapat 2 table table restoran dan table food,
dimana setiap restoran dapat mempunyai beberapa food sebagai food

## how to run
- npm install
- nodemon app.js

### insert data restoran
post http://localhost:3000/api/restoran
- get data semua restoran
get http://localhost:3000/api/restoran
- delete data restoran
delete http://localhost:3000/api/restoran/id
- get data satu restoran
get http://localhost:3000/api/restoran/id
- update data restorant
put http://localhost:3000/api/restoran/id

###food
- insert data food
post http://localhost:3000/api/food
- get data semua food
get http://localhost:3000/api/food
- delete data food
delete http://localhost:3000/api/food/id
- get data satu food
get http://localhost:3000/api/food/id
- update data food
put http://localhost:3000/api/food/id

### food to restoran menu
- addmenu
post http://localhost:3000/api/addmenu
