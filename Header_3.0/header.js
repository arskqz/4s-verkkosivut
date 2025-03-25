function showLinks() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
}

function toggleDropdown() {
    const dropdown = document.getElementById("palvelutDropdown");
    const arrow = document.getElementById("dropdownArrow");

    const isOpen = dropdown.style.display === "block";
    dropdown.style.display = isOpen ? "none" : "block";

    // Rotate arrow
    if (isOpen) {
        arrow.classList.remove("open");
    } else {
        arrow.classList.add("open");
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
