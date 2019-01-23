const _=require('lodash');
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

require('./config/config.js')
const {mongoose}=require('./db/mongoose.js');
const {Movie}=require('./model/movie')

var app=express();
app.use(cors());
var port=process.env.PORT;
app.use(bodyParser.json());



app.get('/movies',(req,res)=>{
    var pageNo=parseInt(req.query.pageNo);
    const size=20;
    var skip=size * pageNo;
    var limit=size;
    console.log("pageNo:- ",pageNo,"skip:- ",skip," and limit :- ",limit);
    
    Movie.find().skip(skip).limit(limit).then(movies=>{
        if(!movies){
            return res.status(404).send();
        }
        res.send(movies);
    },err=>{
        res.status(400).send(err);
    })
})

app.get('/movies/:search',(req,res)=>{
    var search=req.params.search;
    var pageNo=req.query.pageNo;
    const size=20;
    var skip=size * pageNo;
    var limit=size;
    // Movie.find({$text:{$search:search}}).then(movies=>{
    Movie.find({name:{$regex:'.*'+search+'.*',$options:'i'}}).skip(skip).limit(limit).then(movies=>{
        if(!movies){
            return res.status(404).send();
        }
        res.send(movies);
    },err=>{
        res.status(400).send(err);
    })
})

app.listen(port,()=>{
    console.log(`Express started on port ${port}`);
})

module.exports={app};