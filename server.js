const express = require('express');
const app = express();
const port = process.env.port||4000;
const fs = require("fs")
const path = require("path")
const cors = require("cors")
const bodyParser = require('body-parser');

const client = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const uri = "mongodb+srv://codingchitala:joel1990@cluster0.lripehw.mongodb.net";

let db;
client.connect(uri,(err,cli)=>{
    db = cli.db('course_work_2_db');
});

app.use(cors())
app.use((req,res,next)=>{
    let dt = new Date();
    let formatted_date =
      `${dt.getFullYear()} - ${dt.getMonth() + 1} - ${dt.getDate()}
       ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}
      `
    let formatted_log = `[${formatted_date}] ${req.method}:${req.url} ${res.statusCode}`;
    console.log(formatted_log);
    next()
});