
//Task 1: E-commerce Cart System

let cart1 = [
{name: "Shirt", price: 500},
{name: "Shoes", price: 1500}
];

let cart2 = [
{name: "Watch", price: 2000}
];

let cart = [...cart1, ...cart2];
cart.push({name: "Cap", price: 300});
cart.pop();
let total = cart.reduce((sum, item) => sum + item.price, 0);
console.log("Total:", total);


//Task 2: User Profile Management

let user = {
name: "Naveen",
role: "Trainee",
salary: 20000
};

let update = {
role: "Developer",
salary: 50000
};

let updatedUser = { ...user, ...update };
let { name, role, salary } = updatedUser;
console.log(`${name} is now a ${role} earning ${salary}`);

// Task 3: Team Score System

function teamScore(teamName, ...scores) {
console.log("Team:", teamName);
console.log("Scores:", scores);
let totalScore = scores.reduce((sum, s) => sum + s, 0);
let highestScore = Math.max(...scores);
console.log("Total:", totalScore);
console.log("Highest:", highestScore);
}
teamScore("Warriors", 50, 60, 70);

// Task 4: Nested Data Extraction

let apiData = {
user: {
name: "Naveen",
address: {
city: "Bangalore",
pincode: 560001
}
}
};

let { user: { name: userName, address: { city, pincode } } } = apiData;
console.log(`${userName} lives in ${city} - ${pincode}`);

// Task 5: Array Dashboard

let users = ["A", "B", "C", "D", "E"];
users.splice(2, 2, "X", "Y");
let firstThree = users.slice(0, 3);
let hasB = users.includes("B");
let indexE = users.indexOf("E");
console.log(firstThree, hasB, indexE);

// Task 6: Data Cleaning Tool
let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"];
let cleanData = messyData.flat(Infinity).filter(item => item != null);
console.log(cleanData);

// Task 7: Sorting Bug Fix
let prices = [1000, 200, 50, 5000];
prices.sort((a, b) => a - b);
console.log(prices);
// Default sort fails because it treats numbers as strings

// Task 8: Analytics Report Generator
let orders = [
{id:1, amount:100},
{id:2, amount:200},
{id:3, amount:300}
];
let totalRevenue = orders.reduce((sum, o) => sum + o.amount, 0);
let avg = totalRevenue / orders.length;
console.log("Total:", totalRevenue, "Average:", avg);

// Task 9: Inventory System
let inventory = ["Pen", "Book"];
inventory.push("Pencil");
inventory.pop();

let index = inventory.indexOf("Book");
if (index !== -1) {
inventory.splice(index, 1, "Notebook");
}

console.log(inventory.includes("Pen"));

let mergedInventory = [...inventory, "Marker", "Eraser"];
console.log(mergedInventory);

// Task 10: Interview Level Challenge
function processData(...data) {
return data
.flat(Infinity)
.filter((v, i, arr) => arr.indexOf(v) === i)
.sort((a, b) => a - b);
}

console.log(processData(1,2,[3,4],[5,[6]]));

