const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter two numbers (space separated): ", (input) => {
    let [a, b] = input.split(" ").map(Number);
    
    console.log("Add:", a + b);
    console.log("Sub:", a - b);
    console.log("Mul:", a * b);
    console.log("Div:", a / b);
    
    rl.close();
});