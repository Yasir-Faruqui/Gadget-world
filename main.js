//Gsap animation
const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline.from(".home-text", { y: "-300%", ease: "bounce" }).from(
  ".small-text",
  {
    y: "-50%",
    ease: "elastic",
  },
  0.7
);

// Login
let loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let usernameVal = document.getElementById("username").value;
  let passwordVal = document.getElementById("password").value;

  if (!usernameVal)
    document.getElementById("username").style.border = "1px solid #db3a2e";
  else {
    document.getElementById("username").style.border = "none";
  }

  if (!passwordVal)
    document.getElementById("password").style.border = "1px solid #db3a2e";
  else {
    document.getElementById("password").style.border = "none";
  }
});

let newUser = document.querySelector(".new-user-btn");
let loginInput = document.querySelector(".inputs");
let backBtn = document.querySelector(".fa-solid");

newUser.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".create-new-feilds").style.display = "block";
  document.querySelector(".inputs").style.display = "none";

  const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
  timeline.from(".create-new-feilds", { x: "100%", ease: "expo" });
});

backBtn.addEventListener("click", () => {
  document.querySelector(".create-new-feilds").style.display = "none";
  document.querySelector(".inputs").style.display = "block";

  const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
  timeline.from(".inputs", { x: "100%", ease: "expo" });
});

// Register new user

let newUserBtn = document.getElementById("create-newuser");

newUserBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let addUser = document.getElementById("new-username").value;
  let addPassword = document.getElementById("new-password").value;
  let rePassword = document.getElementById("re-password").value;

  if ((addUser, addPassword && addPassword === rePassword)) {
    localStorage.setItem("username", addUser);
    localStorage.setItem("password", addPassword);
    document.getElementById("new-username").value = "";
    document.getElementById("new-password").value = "";
    document.getElementById("re-password").value = "";

    document.getElementById("success-msg").style.display = "block";
    document.getElementById("re-password").style.border = "none";
    document.getElementById("error-msg").style.display = "none";
  } else {
    document.getElementById("re-password").style.border = "1px solid #db3a2e";
    document.getElementById("error-msg").style.display = "block";
    document.getElementById("success-msg").style.display = "none";
  }
});

// Login with localStorage
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let localPass = localStorage.getItem("password");
  let passwordVal = document.getElementById("password").value;

  if (passwordVal === localPass) window.location = "home.html";
  else {
    document.getElementById("username").style.border = "1px solid #db3a2e";
    document.getElementById("password").style.border = "1px solid #db3a2e";
  }
});
