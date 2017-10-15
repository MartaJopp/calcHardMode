var express = require('express');
var app = express();
var port = 5000;
var calculation = [];
//serve up static files
app.use(express.static('server/public'));
//start server
app.listen(port, function(){
    console.log('listening on port', port);
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.post('/addition', function(req,res){
    console.log(req.body);
    res.sendStatus(201);
    var dataToAdd = req.body
    var number1 = (dataToAdd.number1);
    var operator = dataToAdd.operator;
    var number2 = dataToAdd.number2;
    if (dataToAdd.operator == '+'){
    var returnBack=0;
        returnBack = parseInt(number1) + parseInt(number2);   
}
else if (dataToAdd.operator == '*'){
    var returnBack=0;
    returnBack = (parseInt(number1) * parseInt(number2));
}
    else if (dataToAdd.operator == '/') {
        var returnBack = 0;
        returnBack = (parseInt(number1) / parseInt(number2));
    }
    else if (dataToAdd.operator == '-') {
        var returnBack = 0;
        returnBack = (parseInt(number1) - parseInt(number2));
    }
console.log(returnBack)
    calculation.push(returnBack)
});

app.get('/calculate', function (req, res) {
    res.send(calculation);
})

