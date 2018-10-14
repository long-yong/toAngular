// controller.js

const { Task, Book, } = require('./models')

function get_err_arr(err) {
    arr = [];
    for(var key in err.errors) arr.push (err.errors[key].message);
    return arr;
}

module.exports = {

    // for ejs

     getall:(req,res)=>{
        Task.find({})
        .then(data=>{ res.render('index', {allTasks:data}); })
        .catch(err=>{ res.render('index', {allTasks:['Database find error!']}); })
    },

    getone:(req,res)=>{
        Task.findById(req.params.id)
        .then(data=>{ res.render('index', {allTasks:[data]}); })
        .catch(err=>{ res.render('index', {allTasks:err}); })
    },

    new:(req,res)=>{
        Task.create({title:req.params.p1})
        .then(data=>{ res.render('index', {allTasks:[data]}); })
        .catch(err=>{ res.render('index', {allTasks:err}); })
    },

    update:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id,{$set: {title:req.params.p1,description:req.params.p2,completed:req.params.p3}},{new:true,runValidators:true})
        .then(data=>{ res.render('index', {allTasks:[data]}); })
        .catch(err=>{ res.render('index', {allTasks:err}); })
    },

    delete:(req,res)=>{
        Task.findByIdAndDelete(req.params.id)
        .then(data=>{ res.render('index', {allTasks:[data]}); })
        .catch(err=>{ res.render('index', {allTasks:err}); })
    },

    clear:(req,res)=>{
        Task.deleteMany({},(err)=>{res.json(null)});
    },


    // for api

    completed:(req,res)=>{
        Task.find({completed:true},{_id:false, title:true, completed:true})
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json(err);  })
    },


    // for angular

    allTask:(req,res)=>{
        Task.find({})
        .then(data=>{ res.json({allTask:data}); })
        .catch(err=>{ res.json({allTask:null}); })
    },

    oneTask:(req,res)=>{
        Task.findById(req.params.id)
        .then(data=>{ res.json({oneTask:data}); })
        .catch(err=>{ res.json({oneTask:null}); })
    },

    newTask:(req,res)=>{
        Task.create({title:req.body.title,description:req.body.description})
        .then(data=>{ res.json({newData:data}); })
        .catch(err=>{ res.json({newErr:get_err_arr(err)}); })
    },
    
};
