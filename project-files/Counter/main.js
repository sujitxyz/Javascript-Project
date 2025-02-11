document.getElementById("decrementBtn").addEventListener("click", decrementCounter);
document.getElementById("increamentBtn").addEventListener("click", incrementCounter);
document.getElementById("resetBtn").addEventListener("click", resetCounter);

let counterDisplay = document.getElementById("counter-display");

let counterValue = 0;


function updateCounterDisplay(){
    counterDisplay.textContent = counterValue;
}


function decrementCounter(){
    counterValue--;
    updateCounterDisplay();

}

function incrementCounter(){
    counterValue++;
    updateCounterDisplay();
}


function resetCounter(){
    counterValue = 0;
    updateCounterDisplay();
}

