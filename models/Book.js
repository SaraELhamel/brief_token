const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    author :{
      type : String,
      required : true
  },
 price :{
    type : Number,
    required : true
}
})

const Book = mongoose.model('Book',BookSchema);

module.exports = Book