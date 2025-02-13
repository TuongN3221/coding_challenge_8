// Task 1 - Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate) {
    netSalary = (baseSalary + bonus) - (baseSalary * taxRate);// Calculates netsalary
    return `Net Salary: $${netSalary.toFixed(2)}`;// Returns the net salary
};
console.log(calculateSalary(5000, 500, 0.1));// Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15));// Expected output: "Net Salary: $6950.00"

// Task 2 - Product Price After Discount
function calculateDiscount(price, discountRate) {
    finalPrice = price - (price * discountRate)// Calculates the final price
    return `Final Price: $${finalPrice.toFixed(2)}`

};// Function to calculate the discount for the final price
console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"

// Task 5- Loan Payment Calculation
function calculateLoanPayment(principal, rate, time) {
    totalPayment = principal + (principal * rate * time);// Calculates loan payment

    return `Total Payment: $${totalPayment.toFixed(2)}`
};
console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"