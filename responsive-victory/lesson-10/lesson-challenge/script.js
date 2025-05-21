function myname() {
  return "Salamasina";
}
console.log(myname());

// ...existing code...

function calculateTotal(price, taxRate) {
  // Calculate the tax amount
  const taxAmount = price * taxRate;

  // Calculate total by adding price and tax
  const total = price + taxAmount;

  // Return total formatted as string with 2 decimal places
  return total.toFixed(2);
}

// Example usage:
// console.log(calculateTotal(20, 0.1)); // Will output "22.00"
