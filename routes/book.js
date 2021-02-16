var express = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
var router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/Book');
const User = require('../models/User');
const jwt = require('jsonwebtoken')
const token = require('../middlewear/auth')



router.get('/', function (req, res, next) {
   
    res.status(200).json({
      message: 'ok'
    })
  });

  router.get('/allbook',token,async (req,res)=> {
    try{
        const book = await Book.find();
        res.json(book);
    }catch
        (err){
            res.json({message:err});
    }
});
  router.post('/addbook',token,async (req,res)=> {
    const book = new Book({
        name: req.body.name,
        author:req.body.author,
        price:req.body.price,
    });
    try{
        const saveBook = await book.save();
        res.json(saveBook);
    }catch (err){
res.json({message:err});
    }

})

  module.exports = router;