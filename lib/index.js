// ONLY JS - Make your app suggest the user an activity

// const activities = ["sleeping", "play games", "watch tv show", "drink", "go for a walk"]

// JS only power!
// The 3 steps:

// 1. Select elements (button, h2)
// const button = document.querySelector("#inspire-me");
// const result = document.querySelector("#activity");

// // 2. Listen to a click on the button

// button.addEventListener("click", () => {
//   // 3. Change the DOM (display the activity)
//   // get a random activity from the array
//   const randomIndex = Math.floor(Math.random() * 5);
//   const randomActivity = activities[randomIndex];
//   // insert it in the h2
//   result.innerText = randomActivity;
// });



// TODO: Fetch an activity with the Bored API - Let's pseudocode!


// JS + API - Get activities from an API


// const url = "https://bored.api.lewagon.com/api/activity/";


// // 1. Select elements (button, h2)
// const button = document.querySelector("#inspire-me");
// const result = document.querySelector("#activity");

// // 2. Listen to a click on the button

// console.log("1. Script loaded");

// button.addEventListener("click", async() => {
//   console.log("3. Inside click event");
  
//   // 2.5 Call an API
//   const response = await fetch(url);
//   console.log("4. Fetch completed");
  
//   const data = await response.json();
//   console.log("5. Json parsed");
  
//   // console.log(data.activity);
//   // 3. Chenge the DOM
//   result.innerText = data.activity;
//   console.log("6. paragraph updated");
  
// });

// console.log("2. Event listener added");



const url = "https://bored.api.lewagon.com/api/activity/";


// 1. Select elements (button, h2)
const button = document.querySelector("#inspire-me");
const result = document.querySelector("#activity");

// 2. Listen to a click on the button

console.log("1. Script loaded");

const displayActivity = async() => {
  console.log("3. Inside click event");
  
  // 2.5 Call an API
  const response = await fetch(url);
  console.log("4. Fetch completed");
  
  const data = await response.json();
  console.log("5. Json parsed");
  
  // console.log(data.activity);
  // 3. Chenge the DOM
  result.innerText = data.activity;
  console.log("6. paragraph updated");
  
}

button.addEventListener("click", displayActivity);



console.log("2. Event listener added");

















// const ghUrl = "https://api.github.com/users/noemi-ashizuka";

// const loadData = async() => {
//   const response = await fetch(ghUrl);
//   const data = await response.json();
//   console.log(data);
// }

// loadData()








// 200/300 OK
// 400 client error
// 404 NOt Found
// 401 Unauthorized

// 500 Internal server error
// 503 Service unavailable

// VERB URL (scheme, host, path + query params)

// GET https://www.lewagon.com/graduates?category=engineers
// POST
// PATCH
// DELETE

// 6UCNiqVVBW3oU2iVUHh7