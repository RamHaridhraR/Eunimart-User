var express=require('express');
var app=express();

var route=require('./controller/router');
app.use(route);
var path=require('path');
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views','views');

app.listen(3500,()=>{
     console.log("Server is running");
});