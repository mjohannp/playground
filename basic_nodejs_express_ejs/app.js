// load the things we need
var express = require('express');
const basicAuth = require('express-basic-auth')
const dotenv = require('dotenv').config()

var app = express();

const pass = process.env.ADMIN_PASS
if (pass === undefined || pass.length == 0) {
    console.error("Admin passord not defined!")
    process.exit(1)
}

app.use(basicAuth({
    users: { 'admin': pass },
    challenge: true,
    unauthorizedResponse: (req) => {
        return "Zugang verweigert!"
    }
}))

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080, () => {
    console.log('Listening on localhost port 8080');
});
