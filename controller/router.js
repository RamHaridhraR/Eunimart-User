var express=require('express');
let fetchuUrl = require('./ReadDetails');
var route=express();
route.use(express.urlencoded({extended:true}));
route.use(express.json());

route.get('/users',async (req,res)=>{
    let users = await fetchuUrl('https://reqres.in/api/users/');
    res.render('navbar',{user:users});
});

route.get('/users/:id',async (req,res)=>{
    var id = req.params.id;
    let users = await fetchuUrl(`https://reqres.in/api/users/`);
    res.render('userdetails',{user:users,id:id});
}); 

module.exports=route;