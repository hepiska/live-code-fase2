var express=require('express');
var bodyParser=require('body-parser');
let mongoose= require('mongoose');
let api=require('./routes/api');
mongoose.connect('mongodb://localhost/uts_fase2_hepiska');
let app=express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api',api);
app.listen(3000);
