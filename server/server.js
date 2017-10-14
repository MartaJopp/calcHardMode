var express = require('express');
var app = express();
var port = 5000;
//serve up static files
app.use(express.static('server/public'));
//start server
app.listen(port, function(){
    console.log('listening on port', port);
});
