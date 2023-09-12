let express = require('express');
let app = express();

let bodyParser = require('body-parser')

app.use('/public', express.static(__dirname + '/public'))

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} ${req.ip}`);
    next()
})

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', (req, res) =>{
    res.json({"message": "Hello "})
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({"time": req.time})
})

app.get('/:word/echo', (req, res) =>{
    res.json({ word: req.params.word })
})

app.get('/name', (req, res) =>{
    res.json({ name: req.query.first + " " + req.query.last })
})

app.post('/name', (req, res) => {
    res.json({ name: req.body.first + ' ' + req.body.last })
})




























 module.exports = app;
