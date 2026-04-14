
//  Task 1: E-commerce Cart

let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
];

let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
let expensive = cart.filter(item => item.price > 1000);
let names = cart.map(item => item.name.toUpperCase());

console.log("Total:", total);
console.log("Above 1000:", expensive);
console.log("Uppercase Names:", names);

//  Task 2: Student Results

let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
];

let failed = students.filter(s => s.marks < 50);
let distinction = students.some(s => s.marks > 80);
let allPassed = students.every(s => s.marks > 35);
let firstFail = students.find(s => s.marks < 50);

console.log("Failed:", failed);
console.log("Any Distinction:", distinction);
console.log("All Passed:", allPassed);
console.log("First Failed:", firstFail);



 //Task 3: Employee Salary

let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
];

let updated = employees.map(e => ({
  ...e,
  salary: e.salary * 1.1
}));

let highSalary = employees.filter(e => e.salary > 30000);
let totalSalary = employees.reduce((sum, e) => sum + e.salary, 0);
let sorted = [...employees].sort((a, b) => b.salary - a.salary);

console.log("Updated:", updated);
console.log("High Salary:", highSalary);
console.log("Total Salary:", totalSalary);
console.log("Sorted:", sorted);



// Task 4: String Search

let products = ["Laptop", "Mobile", "Tablet", "Camera"];

console.log(products.includes("Mobile"));
console.log(products.map(p => p.toLowerCase()));
console.log(products.indexOf("Tablet"));
console.log(products.join("-"));



//  Task 5: Age Calculator

let dob = new Date("2003-05-10"); // change DOB
let today = new Date();

let age = today.getFullYear() - dob.getFullYear();
let m = today.getMonth() - dob.getMonth();

if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
  age--;
}

console.log(`You are ${age} years old`);



//  Task 6: Login Validation

let users = [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
];

let inputUser = "admin";
let inputPass = "1234";

let found = users.find(u => u.username === inputUser);

if (found && found.password === inputPass) {
  console.log("Login Success ✅");
} else {
  console.log("Invalid Credentials ❌");
}


//  Task 7: Even Number Analyzer

let numbers = [10, 15, 20, 25, 30];

let evens = numbers.filter(n => n % 2 === 0);
let hasOdd = numbers.some(n => n % 2 !== 0);
let allEven = numbers.every(n => n % 2 === 0);
let first = numbers.find(n => n > 20);

console.log("Evens:", evens);
console.log("Any Odd:", hasOdd);
console.log("All Even:", allEven);
console.log("First > 20:", first);



//  Bonus: Orders System

let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
];

let revenue = orders
  .filter(o => o.status === "delivered")
  .reduce((sum, o) => sum + o.amount, 0);

let pending = orders.filter(o => o.status === "pending");
let bigOrder = orders.some(o => o.amount > 1000);
let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);

console.log("Revenue:", revenue);
console.log("Pending:", pending);
console.log("Any >1000:", bigOrder);
console.log("Sorted:", sortedOrders);
```



