const bodyParser = require("body-parser")
const express = require("express")
const mysql = require('mysql')
const path = require('path')
const fs = require('fs')

const app = express()

app.set("views",path.join(__dirname, "./views"))
app.set("view engine", "pug")

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'provided',
    database : 'COOL'
  });
connection.connect()

const config = fs.readFileSync(path.join(__dirname, '../config.json'))

app.get('/trainings/', function(req,res){
    connection.query('SELECT ID, name FROM TRAINING', function (error, results, fields) {
        if (error) throw error;
        res.render('admin', {trainings:results, config:config})
    }); 
})

app.route('/trainings/new/')
    .get(function (req,res) {
        res.render('addresource')
    })
    .post(function (req,res){
        connection.query(`INSERT INTO TRAINING (name,shortdesc,ldesc,lang) 
        VALUES (${mysql.escape(req.body.name)},${mysql.escape(req.body.shortdesc)},
                ${mysql.escape(req.body.ldesc)},${mysql.escape(req.body.lang)})`), 
            function(error, results,fields) {
                if (error) throw error;
            }
        res.redirect('../')
    })

app.route('/trainings/:id/')
    .get(function (req,res) {
        connection.query('SELECT * FROM TRAINING WHERE ID='+mysql.escape(req.params.id), function (error, results, fields) {
            if (error) throw error;
            res.render('addresource', {training:results[0]})
        });
    })
    .post(function (req,res){
        connection.query(`UPDATE TRAINING SET name = ${mysql.escape(req.body.name)},
                                              shortdesc = ${mysql.escape(req.body.shortdesc)}, 
                                              ldesc = ${mysql.escape(req.body.ldesc)}
                                              WHERE ID = ${mysql.escape(req.params.id)}`), 
            function(error, results,fields) {
                if (error) throw error;
            }
        res.redirect('../')
    })
    .delete(function (req,res){
        connection.query(`DELETE FROM TRAINING WHERE ID = ${mysql.escape(req.params.id)}`), 
            function(error, results,fields) {
                if (error) throw error;
            }
            res.send('Done')
    })

app.get('/requests/', function(req,res){
    connection.query('SELECT * FROM REQUEST', function (error, results, fields) {
        if (error) throw error;
        res.render('requests', {requests:results, config:config})
    }); 
})
    
app.delete('/requests/:id/', function (req,res){
    connection.query(`DELETE FROM REQUEST WHERE ID = ${mysql.escape(req.params.id)}`), 
        function(error, results,fields) {
            if (error) throw error;
        }
        res.send('Done')
})

module.exports = app