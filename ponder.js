// how to manipulate the DOM with js

// Grab our h1 from the page
let heading = document.querySelector("h1");

console.log(heading);

//change the text o fthe element
heading.textContent = "Changed the heading to something else!";

//change the text color
heading.style.color = "#50af35";

//pick your own style and change it
heading.style.background = "#f48dff";

// retrive an ID element from page 
document.getElementById("topics").style.color = "red";

//select the img tag
let image = document.querySelector("img");

console.log(image.getAttribute("src"));
image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/8/8e/ChocChip.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                