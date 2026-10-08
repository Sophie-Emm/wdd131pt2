// grab the menu button and add a click event listener
let menuBtn = document.querySelector(".menu-btn");

//Add event listener to the menu button
// anonymous or nameless function
menuBtn.addEventListener("click", function (e) {
    //grab reference to the menu element
    let nav = document.querySelector('nav');

    //toggle menu styles when clicked
    if (nav.style.display = nav.style.display === '' ? 'flex' : '');

    // toggle the class of the menu button
    menuBtn.classList.toggle("change");
        
});

