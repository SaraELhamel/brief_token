var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User')
const jwt = require('jsonwebtoken')



router.get('/', function (req, res, next) {
   
    res.status(200).json({
      message: 'ok'
    })
  });

  router.get('/all',async (req,res)=> {
    try{
        const user = await User.find();
        res.json(user);
    }catch
        (err){
            res.json({message:err});
    }
});
  router.post('/adduser',async (req,res)=> {
    const user = new User({
        name: req.body.name,
        phone:req.body.phone,
        password:req.body.password,
    });
    try{
        const saveUser = await user.save();
        res.json(saveUser);
    }catch (err){
res.json({message:err});
    }
    
});


router.post('/login',(req,res) =>{

  User.findOne({name: req.body.name})
  .then(user=>{
   
    // return
      if(user.password==req.body.password){
        const token = jwt.sign({_id:user._id,name:user.name },'privateKey')
        res.status(200).send({
            user :user,
            token : token
        })
      }else{
          res.status(401).send('email or pass incorect')
      }
  })
    
    
})



  module.exports = router;