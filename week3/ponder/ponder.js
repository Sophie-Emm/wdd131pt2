// grab the menu button and add a click event listener
let menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

//Add event listener to the menu button
// anonymous or nameless function
menuBtn.addEventListener("click", toggle);
function toggle() {
    //grab reference to the menu element
    let nav = document.querySelector("nav");

    //toggle menu style
    menuBtn.classList.toggle("hide")
    menuBtn.classList.toggle("change");  
}