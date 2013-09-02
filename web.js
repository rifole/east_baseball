var express = require('express');
var fs = require('fs');
var index_html = "index.html";
var about_html = 'about.html';
var contact_html = 'contact.html';
var services_html = 'services.html';
var start_will_html = 'start_will.html';
var start_trust_html = 'start_trust.html';
var start_contact_html = 'start_contact.html';

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync(index_html).toString();
    response.send(html);
});

app.get('/about', function(req,res){
    res.send(fs.readFileSync(about_html).toString());
});

app.get('/contact', function(req,res){
    res.send(fs.readFileSync(contact_html).toString());
});

app.get('/services', function(req,res){
    res.send(fs.readFileSync(services_html).toString());
});

app.get('/start_will', function(req,res){
    res.send(fs.readFileSync(start_will_html).toString());
});

app.get('/start_trust', function(req,res){
    res.send(fs.readFileSync(start_trust_html).toString());
});
app.get('/start_contact', function(req,res){
    res.send(fs.readFileSync(start_contact_html).toString());
});

var port = process.env.PORT || 8080
app.listen(port, function() {
  console.log("Listening on " + port);
});
