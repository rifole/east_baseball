var express = require('express');
var fs = require('fs');
var index_html = "index.html";
var roster_html = 'roster.html';
var schedule_html = 'schedule.html';
var calendar_html = 'calendar.html';
var donate_html = 'donate.html';


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync(index_html).toString();
    response.send(html);
});

app.get('/roster', function(req,res){
    res.send(fs.readFileSync(roster_html).toString());
});

app.get('/schedule', function(req,res){
    res.send(fs.readFileSync(schedule_html).toString());
});

app.get('/calendar', function(req,res){
    res.send(fs.readFileSync(calendar_html).toString());
});

app.get('/donate', function(req,res){
    res.send(fs.readFileSync(donate_html).toString());
});

var port = process.env.PORT || 8080
app.listen(port, function() {
  console.log("Listening on " + port);
});
