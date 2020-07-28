// global variables
let currentPin;
const displayPin = document.getElementById('displayPin');
const generateBtn = document.getElementById('generateBtn');
const pinInputDisplay = document.getElementById('pinInputDisplay');
const submitBtn = document.getElementById('submitBtn');
const welcomeMsg = document.getElementById('matched');
const errMsg = document.getElementById('notMatched');
const actionLeftMsg = document.querySelector('.action-left');
let actionLeft;

// pin generate
function generatePin(){
    let randomPin;
    do{
        randomPin = Math.floor(Math.random() * 9999);
    }while(randomPin < 1000);    
    // return randomPin;
    displayPin.value = randomPin;
    currentPin = randomPin;

    errMsg.style.display = 'none';
    welcomeMsg.style.display = 'none';
    actionLeft = 3;
    submitBtn.disabled = false;
    actionLeftMsg.style.display = 'none';
}

generateBtn.addEventListener('click', function(){
    const newPin = generatePin();    
    // displayPin.value = newPin;
    // currentPin = newPin;
});

// submit Button
submitBtn.addEventListener('click', function(){
    const inputPin = pinInputDisplay.value;    
    if(inputPin == currentPin && inputPin.length == 4){
        pinInputDisplay.value = '';
        welcomeMsg.style.display = 'block';
        errMsg.style.display = 'none';
        actionLeftMsg.style.display = 'none';
    }else{
        pinInputDisplay.value = '';
        errMsg.style.display = 'block';
        welcomeMsg.style.display = 'none';

        actionLeft--;
        if(actionLeft >= 0){            
            actionLeftMsg.innerText = actionLeft + ' try left';
            actionLeftMsg.style.display = 'block';
        }else{
            submitBtn.disabled = true;
            actionLeftMsg.innerText = 'Sorry, No try left';
        }
    }    
});

// note: The Submit Function is also checking the length of the input pin so that user can not use a equivalent value of the pin. example: the pin is 5781, user can not use 005781. 

// number pad
function numPad(number){
    pinInputDisplay.value = pinInputDisplay.value + number;
}

// backspace Button
function backspaceBtn(){
    const currentInput = pinInputDisplay.value;
    let newInput = '';

    for(let i = 0; i < currentInput.length - 1; i++){
        newInput = newInput + currentInput[i];
    }

    pinInputDisplay.value = newInput;
}

// clear Button
function clearBtn(){
    pinInputDisplay.value = '';
}

// note: I didn't capture generated pin value from HTML output to avoid bug. if I captured it from HTML user can easily Type and change it. (Line No. 18)