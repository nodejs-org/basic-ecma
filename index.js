var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static(path.join(__dirname, './dist/dev')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './src/home', 'index.html'));
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})
