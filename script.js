// ================= TASK 1 =================
function calculateDiscount(product, price) {
  let finalPrice = price > 1000 ? price * 0.8 : price * 0.9;
  console.log(`Product: ${product}`);
  console.log(`Final Price: ${finalPrice}`);
  return finalPrice;
}
calculateDiscount("Shoes", 2000);


// ================= TASK 2 =================
function payment(amount) {
  console.log(`Payment of ${amount} successful`);
}

function orderSuccess() {
  console.log("Order delivered");
}

function placeOrder(callback) {
  console.log("Order placed");
  callback(500);
  orderSuccess();
}
placeOrder(payment);


// ================= TASK 3 =================
let employees = [
  { name: "Navi", salary: 50000 },
  { name: "John", salary: 70000 }
];

for (let emp of employees) {
  if (emp.salary > 60000) {
    console.log(`${emp.name}: High Salary`);
  } else {
    console.log(`${emp.name}: Normal Salary`);
  }
}


// ================= TASK 4 =================
let correctPassword = "1234";
let attempts = 0;

while (attempts < 3) {
  attempts++;
  console.log(`Attempt ${attempts}`);

  let enteredPassword = attempts === 3 ? "1234" : "wrong";

  if (enteredPassword === correctPassword) {
    console.log("Login success");
    break;
  }
}


// ================= TASK 5 =================
function* offers() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
  yield "Cashback";
}

let offerGen = offers();
console.log(offerGen.next().value);
console.log(offerGen.next().value);
console.log(offerGen.next().value);
console.log(offerGen.next().value);


// ================= TASK 6 =================
let cart = [100, 200, 300, 400];
let total = 0;

for (let price of cart) {
  total += price;
}
console.log("Total Bill:", total);


// ================= TASK 7 =================
let user = {
  name: "Navi",
  role: "Developer",
  location: "India"
};

for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}


// ================= TASK 8 =================
function createPhone() {
  return "Phone";
}
function createBattery() {
  return "Battery";
}
function createCharger() {
  return "Charger";
}

function createOrder() {
  return `${createPhone()} + ${createBattery()} + ${createCharger()}`;
}
console.log("Your Order:", createOrder());


// ================= TASK 9 =================
function collegeForm(name, department = "Not Assigned") {
  console.log(`Name: ${name}`);
  console.log(`Department: ${department}`);
}
collegeForm("Navi");


// ================= TASK 10 =================
function emi(principal) {
  return function(rate) {
    return function(time) {
      return (principal * rate * time) / 100;
    };
  };
}
console.log("EMI:", emi(10000)(2)(12));


// ================= TASK 11 =================
for (let i = 1; i <= 10; i++) {
  console.log(`${i} → ${i % 2 === 0 ? "Even" : "Odd"}`);
}


// ================= TASK 12 =================
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // works
// console.log(b); // error
// console.log(c); // error


// ================= TASK 13 =================
(function() {
  console.log("🔥 Flash Sale: 50% OFF on Shirts");
})();


// ================= TASK 14 =================
function marks(a, b, c) {
  let totalMarks = a + b + c;
  let average = totalMarks / 3;

  console.log("Total:", totalMarks);
  console.log("Average:", average);

  return { totalMarks, average };
}
marks(80, 90, 70);


// ================= TASK 15 =================
function* retryOffers() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
}

let retry = retryOffers();
let result = retry.next();

while (!result.done) {
  console.log(result.value);
  result = retry.next();
}

console.log("All offers expired");