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

// Task 4 - Car Rental Cost Calculation
function calculateRentalCost(days, carType, insurance = false) {
    const subscriptionLevel = {
        "Economy": 40,
        "Standard": 60,
        "Luxury": 100
    };// Outlines the subscription level
    const insuranceCost = insurance ? 20 : 0;// Checks for insurnace to be added to totalCost

    let totalCost = (subscriptionLevel[carType] * days) + insuranceCost;// Calculates the total cost for rental
    
    return `Total Rental Cost: $${totalCost}`;
};
console.log(calculateRentalCost(3, "Economy", true)); // Expected output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // Expected output: "Total Rental Cost: $500"


// Task 5- Loan Payment Calculation
function calculateLoanPayment(principal, rate, time) {
    totalPayment = principal + (principal * rate * time);// Calculates loan payment

    return `Total Payment: $${totalPayment.toFixed(2)}`
};
console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"

// Task 6 - Identifying Large Transactions
let transactions = [200, 1500, 3200, 800, 2500];

function filterLargeTransactions(transactions, filterFunction) {
    let filterTransactions = transactions.filter(filterFunction)
    console.log(`Filtered Transactions: ${filterTransactions}`);
};
filterLargeTransactions(transactions, amount => amount > 1000);// Expected output: [1500, 3200, 2500]


// Task 7 - Shopping Cart Tracker
function createCartTracker(params) {
    let cartValue = 0;// Sets up empty cart value


    return function (price) {
        cartValue += price;// Adds the total from the cart variable
        return `Total Cart Value: $${cartValue}`;
    }
};
let cart = createCartTracker();// Sets up
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"
