$(document).ready(readyNow);//once html is loaded

function readyNow(){
    console.log('jquery sourced');
    $('.number').on('click', firstNumber);
     $('.operator').on('click', addition);
     $('#equals').on('click', equals);
     $('#clear').on('click', clearScreen);
}

var firstNumberArray = [];
var operatorArray = [];
var secondNumberArray = [];
var sendValues = {};


function firstNumber(){
    console.log('number clicked') //number buttons and text works
    $('#calculator').append($(this).html()); //append the text value of the button - set to numbers
    sendFirstNumber = []; 
    var firstInput = $(this).html(); // first input is equal to what is on the screen
    console.log(firstInput); // 
sendFirstNumber.push($(this).html()); // pushing numbers to array
console.log(sendFirstNumber);
    }

function addition(){
console.log('operator clicked');    //checking to make sure add button is functioning
firstNumberArray = [];   // firstNumber array
firstNumberArray.push($('#calculator').html()); // on click of an operator - push calculator screen value to firstNumberArray
console.log('firstNumber:', firstNumberArray);
$('#calculator').html(''); // empty calculator screen
$('#calculator').append($(this).html()); // append the value text of the operator clicked
operatorArray = []; // operator array
operatorArray.push($(this).html()); // send operator value to array
console.log('Operator:', operatorArray);
$('#calculator').html(''); // empty calculator screen
}

function equals() { 
    console.log('equal clicked');
    secondNumberArray = [];   // secondNumber array
    secondNumberArray.push($('#calculator').html()); // on click of equals - push calculator screen value to secondNumberArray  
    console.log('second number:', secondNumberArray)
    var infoToSend = {
        number1: firstNumberArray,
        operator: operatorArray,
        number2: secondNumberArray
    }
    console.log(infoToSend);
    $.ajax({ // POST information to server
        method: 'POST',
        url: '/addition',
        data: infoToSend
    }).done(function(response){
        console.log(response);
        getCalculation();
    
    }).fail(function(message){
        console.log('Error', message);
    })
}

function getCalculation(){ // receive calculation from server
    $.ajax({
        method: 'GET',
        url: '/calculate',
    }).done(function(response){
        var resreceived = response;
        console.log(resreceived);
        $('#calculator').html(''); // empty calculator screen
        $('#calculator').append(resreceived.pop()); // append last number in array to calculator screen
    })
}

function clearScreen(){
    console.log('Clear button clicked');
    $('#calculator').html('');
}


