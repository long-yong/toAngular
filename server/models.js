// model_Quote.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true},
                 (errs)=>errs ? console.log(errs):console.log('db is good to go'));

var TaskSchema = new mongoose.Schema({
    title:{ 
        type:String,
        required: [true, "Title is required."],
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


const CommentSchema = new mongoose.Schema({
    star: {
        type: String, 
        required: true,
    },
    content:{
        type: String, 
        required: true,
    },
}, {timestamps: true})

var CakeSchema = new mongoose.Schema({
    baker:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    comments: [CommentSchema]
}, {timestamps:true});

module.exports = {
    Task: mongoose.model('Task', TaskSchema),
    Cake: mongoose.model('Cake', CakeSchema),
    Comment: mongoose.model('Commnet', CommentSchema)
}

