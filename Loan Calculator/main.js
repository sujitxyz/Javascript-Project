document.getElementById("calculateBtn").addEventListener("click", function() {
    // Get user input values
    let loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
    let interestRate = parseFloat(document.getElementById("interestRateInput").value) / 100 / 12;
    let loanTerm = parseInt(document.getElementById("loanTermInput").value);
    
    let resultElement = document.getElementById("result");

    // Validate inputs
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || loanTerm <= 0) {
        resultElement.innerHTML = "Please enter valid numbers!";
        resultElement.style.color = "red";
        return;
    }
    
    // Calculate monthly payment using loan formula
    let monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    
    // Display result
    resultElement.innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    resultElement.style.color = "green";
});
