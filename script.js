

//  Task 1: Order System (setTimeout)

console.log("Order placed");

setTimeout(() => {
  console.log("Preparing food");
}, 2000);

setTimeout(() => {
  console.log("Food ready");
}, 4000);

setTimeout(() => {
  console.log("Delivered");
}, 5000);




//  Task 2: Digital Clock (setInterval)

let count = 0;

const clock = setInterval(() => {
  const now = new Date();
  console.log("Time:", now.toLocaleTimeString());
  count++;

  if (count === 10) {
    clearInterval(clock);
    console.log("Clock stopped");
  }
}, 1000);



//  Task 3: Callback Hell Simulation

function loginUser(callback) {
  setTimeout(() => {
    console.log("User Logged In");
    callback();
  }, 1000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("User Data Fetched");
    callback();
  }, 1000);
}

function getUserPosts(callback) {
  setTimeout(() => {
    console.log("User Posts Fetched");
  }, 1000);
}

// Execute Callback Flow
loginUser(() => {
  getUserData(() => {
    getUserPosts();
  });
});



//  Task 4: Fake API Promise

function getProducts() {
  return new Promise((resolve, reject) => {
    const success = true; // change to false to test error

    setTimeout(() => {
      if (success) {
        resolve(["Laptop", "Phone", "Tablet"]);
      } else {
        reject("API Failed");
      }
    }, 2000);
  });
}

// Execute Promise
getProducts()
  .then((products) => {
    console.log("Products:", products);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Request completed");
  });

