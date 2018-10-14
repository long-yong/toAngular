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
    

    // for ejs

    app.get ('/getall',                  controller.getall);

    app.get ('/getone/:id',              controller.getone);

    app.get ('/new/:p1',                 controller.new);
    
    app.get ('/update/:id/:p1/:p2/:p3',  controller.update);

    app.get('/delete/:id',               controller.delete);

    app.get('/clear',                    controller.clear);


    // for api

    app.get ('/completed',               controller.completed);


    // for angular

    app.get('/alltask',                  controller.allTask);

    app.get('/onetask/:id',              controller.oneTask);

    app.post('/newtask',                 controller.newTask);

    return app;
}

