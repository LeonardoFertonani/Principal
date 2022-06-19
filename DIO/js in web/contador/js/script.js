var incrementOnHTML = document.getElementById('increment')
var decrementOnHTML = document.getElementById('decrement')
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

decrementOnHTML.addEventListener("click", function(){
    currentNumber = currentNumber - 1;
    if(currentNumber==-1){
        currentNumber = 0;
    }
    currentNumberWrapper.innerHTML = currentNumber;
})
incrementOnHTML.addEventListener('click', function(){
    if(currentNumber<10){
        currentNumber = currentNumber + 1;
    }
    currentNumberWrapper.innerHTML = currentNumber;
})