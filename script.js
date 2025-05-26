console.log("started my project...");

const toggleBtn = document.querySelector(".dark-toggle-btn");

if (localStorage.getItem("darkMode" === "enabled")) {
  document.body.classList.add("dark");
}
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
  
});

const colorBtn=document.getElementById('#changeColorBtn'); 

const card=document.querySelector('.card');

const colors=['#f28b82','#4b8ce3','#bbe81a','#cd1ae8','#e34b4b','#40e4a6'];

colorBtn.addEventListener('click',()=>{

const randomColor=colors[Math.floor(Math.random()*colors.length)];

card.style.backgroundColor=randomColor;

}

);