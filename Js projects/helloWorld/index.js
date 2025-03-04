const btn = document.querySelector("button");
const name = document.querySelector("span");

btn.addEventListener('click', () => {
   const username =  prompt("Enter Your Name:")
   name.textContent = username;
});
