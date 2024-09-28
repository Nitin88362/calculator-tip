const btnE1 = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");
function calculateTotal() {
    // Convert the input values to numbers
    const billValue = parseFloat(billInput.value);
    const tipValue = parseFloat(tipInput.value);
    
    // Calculate the total
    const totalValue = billValue * (1 + tipValue / 100);
    
    // Update the totalSpan with the calculated value
    totalSpan.innerText = totalValue.toFixed(2);  // Rounds to 2 decimal places
}

btnE1.addEventListener("click", calculateTotal);
