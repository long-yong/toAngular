// model_Quote.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true},
                 (errs)=>errs ? console.log(errs):console.log('db is good to go'));

var TaskSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        minlength:2
    },

    description:{
        type:String,
        required:true,
        minlength:2
    },

    completed:{
        type:Boolean,
        default: false,
    },

}, {timestamps:false});


var BookSchema = new mongoose.Schema({

    author:{
        type:String,
        required:true,
        minlength:2
    },

    country:{
        type:String,
    },

    birthday:{
        type:String,
    },

    bookname: {
        type:String,
        required:true,
        minlength:2
    },

    published: {
        type:String,
    }

}, {timestamps:true});

module.exports = {
    Task: mongoose.model('Task', TaskSchema),
    Book: mongoose.model('Book', BookSchema),
}

