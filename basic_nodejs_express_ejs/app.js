// load the things we need
var express = require('express');
const basicAuth = require('express-basic-auth')

var app = express();
 
app.use(basicAuth({
    users: { 'admin': 'pass' },
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
