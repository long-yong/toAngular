// routes.js

var express = require("express");
const bp = require('body-parser');
const controller = require('./controller');

module.exports = function(app) {

    app.set('views', __dirname + '/views');
    app.set('view engine', "ejs");
    app.use(express.static(__dirname + "/static"));

    app.use(bp.urlencoded({extended:true}));

    app.use(bp.json());


    // ejs

    app.get ('/getall',                  controller.getall);

    app.get ('/getone/:id',              controller.getone);

    app.get ('/new/:p1',                 controller.new);
    
    app.get ('/update/:id/:p1/:p2/:p3',  controller.update);

    app.get('/delete/:id',               controller.delete);


    // api

    app.get('/clear',                    controller.clear);

    app.get ('/completed',               controller.completed);


    // angular cpp

    app.get('/alltask',                  controller.allTask);

    app.get('/onetask/:id',              controller.oneTask);


    // angular epp

    app.post('/newtask',                 controller.newTask);


    // angular task (fpp & gpp)

    app.post('/addtask',                 controller.addTask);

    app.post('/edittask/:id',            controller.editTask);

    app.get('/deltask/:id',              controller.delTask);


    // angular cake (hpp & jpp)

    app.get('/allcake',                  controller.allCake);

    app.post('/addcake',                 controller.addCake);

    app.get('/delcake/:id',              controller.delCake);

    app.post('/addcmt/:id',              controller.addCmt);

    return app;
}

