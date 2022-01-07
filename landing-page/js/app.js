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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const Allsections = document.querySelectorAll("section"); 

const fragment = document.createDocumentFragment(); // creating document fragment to append the li elements to.
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
var prevScrollpos = window.pageYOffset; // hiding the navbar when scrolling down and showing it when scrolling up.

window.addEventListener("scroll", function () { // adding an event listener (scroll)

  var currentScrollPos = window.pageYOffset; // defining a var containing YOffset of the page 

  if (prevScrollpos > currentScrollPos) { // adding a condition to display and not showing the navbar when scrolling down and up.

    navbar.style.top = "0px";

  } else {

    navbar.style.top = "-50px";
    
  }
})


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
document.addEventListener("DOMContentLoaded", function () {
  // adding event listener to add the navigation bar at the end of loading the web page content

  Allsections.forEach((section) => {
    
    const linkelement = document.createElement("a"); 

    const listelement = document.createElement("li"); 

    linkelement.textContent = section.dataset.nav; // assigning text content to the link element By the data-nav.

    linkelement.href = `#${section.id}`; //assigning href attribute to the anchor element

    linkelement.classList.add("menu__link"); 

    linkelement.addEventListener("click", (event) => { // adding event listener to the link element thats is created in this loop.

      event.preventDefault(); // preventing the default action to the click on the link which is going to the section non smoothly.

      section.scrollTo({ 

        behavior: 'smooth', // choosing the way that it should scroll to the section which is smooth scrolling.
        
        block: 'center' // making the browser scroll to the center of the area of the section.
        
      })

      // NOTE: this can also be made with the scrollTo method .
 
    })

    listelement.appendChild(linkelement); 

    fragment.appendChild(listelement); // appending the list item to the fragment.
  });

  document.querySelector("#navbar__list").appendChild(fragment); // appending the fragment to the ul.

});








// Add class 'active' to section when near top of viewport
const options = {

  root: null, // in this case its the viewport.

  rootMargin: "100px", // giving the root element which is the viewport in this case a margin of 100px.

  threshold: 0.8

} // i have assigned the values of options object after i tried so many ways to make it work for all the devices.

window.addEventListener("scroll",toggleActiveState); // adding an event listener to the window.

const callback = (entries) => {

  if (entries[0].isIntersecting){ // checking if the first entry being observed (section) is intersecting with the viewport. 

    const id = entries[0].target.id;

    const link = document.querySelector(`a[href="#${id}"]`);// selecting the anchor element with this specific href attribute.

    entries[0].target.classList.add('your-active-class');

    link.classList.add('your-active-class');

  }
  else {

    const id = entries[0].target.id;

    const link = document.querySelector(`a[href="#${id}"]`);

    entries[0].target.classList.remove('your-active-class');

    link.classList.remove('your-active-class');

  }

}

const observer = new IntersectionObserver(callback, options); // creating an intersectionObserver.

function toggleActiveState(){

  Allsections.forEach(section =>{

    observer.observe(section); // letting the intersectionObserver observe the section in the loop.

  })
};

// Scroll to anchor ID using scrollTO event
// did it the DOMContentLoaded Section .
/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click
// did it above .
// Set sections as active