// Mobile hamburger menu
function myFunction() {
    const navLinks = document.querySelector(".nav-links");
    // Toggle between 'block' and 'none'
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
}
// Smooth nav
const navigationHeight = document.querySelector('nav').offsetHeight;
    document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px");
    console.log("Smooth navigation enabled!");
    
    // header sticky
    window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})

console.log("Rock and roll, baby!")