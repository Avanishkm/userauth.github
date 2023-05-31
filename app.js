const express = require('express');
const req = require('express/lib/request');
const app = express();
const studentRoute = require('./api/routs/student');

const userRoute = require('/api/routs/user');
const mongoose = require('mongoose');

const bodyParser = require('body-parser')
mongoose.connect('mongodb+srv://sbs:<password>@sbs-gpk49.mongodb.net/test?retryWrites=true&w=majority');

mongoose.connection.on('error',err=>{
    console.log('connection failed');
})

mongoose.connection.on('error',connected=>{
    console.log('connected with database....');
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use('/user', userRoute);

app.use('/student', studentRoute)
app.use((req, res, next)=>{
    res.status(200).json({
        message:'app is running'
    })
})

module.exports = app;