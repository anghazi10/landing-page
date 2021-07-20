/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
// getting navigation menu
const menuNavBar = document.getElementById("navbar__list");
// getting sections
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav bar
const creatingNavBar = () => {
    let nav = "";
    sections.forEach(section => {
        let sectionID = section.id;
        let sectionDataNav = section.dataset.nav;
        // let createNewsection = `<li><a class="menu__link" href="#">${sectionDataNav}</a></li>`;
        let createNewsection = `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
        nav += createNewsection;
    });
    menuNavBar.innerHTML = nav;
};


// Add class 'active' to section when near top of viewport
// getting the size of section and Returns the greatest number less than or equal to that section.
const sizeOfSection = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};;

// adding the active class
const addActiveClass = (isInviewPort, section) => {
    if (isInviewPort) {
        section.classList.add("your-active-class");
        section.style.cssText = "background-color: lightsteelblue;";
    }
};

// remove the active class
const removeActiveClass = (section) => {
    section.classList.remove("your-active-class");
    section.style.cssText = "background-color: linear-gradient(0deg,rgba(255, 255, 255, 0.1) 0%,rgba(255, 255, 255, 0.2) 100%);";
};;

// the section Activation 
const activateSection = () => {
    sections.forEach(section => {
        const element = sizeOfSection(section);
        isInviewPort = () => element < 300 && element >= -250;
        removeActiveClass(section);
        addActiveClass(isInviewPort(), section);
    });
};;


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
creatingNavBar();

// Scroll to section on link click


// Set sections as active
window.addEventListener('scroll', activateSection);;


// using typed.js to making live typing to the page header
let typed = new Typed(".live-Typing", {
    strings: [" first Landing Page", " first dynamically website"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 4000,
    startDelay: 1000,
    loop: true,
    showCursor: true,
});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // for google chrome
}

