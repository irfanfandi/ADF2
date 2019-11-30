const express = require("express");
const db = require("../db/db");
const bodyParser = require("body-parser");

//Setup express app
const app = express();

// Setup body parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));
// I guess those codes on the top working like magic :D just kidding, we can read the documentation in bodyParser

app.get('/api/v1/hello',(req,res)=>{ //Trying to make simple API with interFile data (/api/v1/hello that is a same thing like file in htaccess, that's for routing url)
    res.status(200).send({
        Success : true,
        Message : 'Hello there'
    })
});

app.get('/api/v1/todos',(req,res)=>{
    res.status(200).send({
        Success : true,
        Message : 'Hello there',
        data: db //for including the external JSON file into this file, or showing db's JSON data when we call localhost:8080/api/v1/todos
    }) // we also can type only db between {..} without  success and message
});

app.get('/gugel',(req,res)=>{
    res.redirect('https://google.com');// if we want to redirect page when user comes to our API :D
});

let pong="Pong";
app.get('/ping',(req,res)=>{
    res.send(`ping ${pong}`);// if we want to send response
});


app.post('/api/todo',(req,res)=>{
    const todo={
        id : db[db.length-1].id+1,
        title : req.body.tit,// tit is json param
        description : req.body.des// des is json param, those are from input using Post method, but we have to use json data for input
    };
    db.push(todo);
    res.status(201).send({
        Success : true,
        message : 'todo added successfully',
        data : db
    });
})

//============v GAGAL v===========
app.get('/api/todo:id',(req,res)=>{
    const id = parseInt(req.params.id);
    //console.log(id);
    const currentTodo = db.find(todo => todo.id === id);
    if (currentTodo) {
        res.send(currentTodo)
    } else {
        res.sendStatus(404)
    }
    
})
//==============^ GAGAL ^==========

//Set up our server runing
const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`Server runing on port http://localhost:${PORT}`);
})