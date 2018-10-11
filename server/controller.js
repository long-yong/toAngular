// controller.js

const { Task, } = require('./models')

module.exports = {

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

    tasks:(req,res)=>{
        Task.find({})
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json(err);  })
    },
    
};
