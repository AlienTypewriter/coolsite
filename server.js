"use strict"

const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser")
const express = require("express")
const crypto = require("crypto")
const path = require("path")
const mysql = require('mysql')

const admin = require('./admin/admin.js')

const app = express()
const port = 3000

app.use(cookieParser())
app.use('/jquery', express.static(path.join(__dirname,'/node_modules/jquery/dist/')));
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'provided',
  database : 'COOL'
});
connection.connect()

app.get('/api/', function (req,res) {
    connection.query('SELECT * FROM TRAINING WHERE lang='+mysql.escape(req.cookies.locName), 
        function (error, results, fields) {
        if (error) throw error;
        res.json(results)
    });    
})

app.post('/api/regEmail/', function(req,res) {
    var code = crypto.randomBytes(3).toString('hex')
    console.log(code)
    res.json({code:code})
})

app.get('/api/locale/:loc', function (req,res) {
    res.json(JSON.parse(fs.readFileSync(path.join(__dirname, `locales/${req.params.loc}.json`))))
})

app.get('/locale/:loc', function(req,res) {
    res.cookie('locName', req.params.loc, {maxAge:8640000})
        .redirect('/')
})


app.post('/', function(req,res) {
    connection.query(`INSERT INTO REQUEST (name,surname,phone,email,content) 
        VALUES (${mysql.escape(req.body.name)},
                ${mysql.escape(req.body.surname)},
                ${mysql.escape(req.body.phone)},
                ${mysql.escape(req.body.email)},
                ${mysql.escape(req.body.content)})`), 
        function(error, results,fields) {
            if (error) throw error;
        }
    res.redirect('/')
})

app.use('/admin', admin)

app.listen(port)