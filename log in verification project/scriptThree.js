let userSessionStorage = sessionStorage;
let username = document.querySelector("#username");
let displayname = document.querySelector("#displayname");
let email = document.querySelector("#email");
let gender = document.querySelector("#gender");
let plan = document.querySelector("#plan");
let key = userSessionStorage.key(0);
console.log(key);
username.textContent = userData.firstName
  ? ` ${userData.firstName} ${userData.lastName}`
  : "guest id";
displayname.textContent = userData.firstName
  ? `Name: ${userData.firstName} ${userData.lastName}`
  : "guest id";
email.textContent = userData.email ? `Email: ${userData.email}` : "guest email";
gender.textContent = userData.gmail ? `Gender:${userData.gender}` : "guest id";
plan.textContent = userData.plan ? `Plan: ${userData.plan}` : "guest id";
let logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  sessionStorage.removeItem(key);
  alert("successfully logout");
  window.location.href = "./login.html";
});
