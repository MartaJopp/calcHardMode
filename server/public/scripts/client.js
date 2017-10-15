$(document).ready(readyNow);//once html is loaded

function readyNow(){
    console.log('jquery sourced');
    $('.number').on('click', firstNumber);
     $('#add').on('click', operator);
     $('#equals').on('click', equals)
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

function operator(){
console.log('add clicked');    //checking to make sure add button is functioning
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
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: infoToSend
    }).done(function(response){
        console.log(response);
    }).fail(function(message){
        console.log('Error', message);
    })
}






