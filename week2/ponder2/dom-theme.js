// 1. Functions
myFunctionName("Dan!");
function myFunctionName(name) {
    console.log("Your name is:${name}");
    let LastName = "Demmerly";
}

//call invoke funtion
myFunctionName("Sophia Demmerly");
myFunctionName("sophie-emm");

//event listeners
    //retrive from dom
    let select = document.querySelector("#theme-select");
    //register event
    //event we are listening for, function to call event when occurs
    select.addEventListener("change", handleEvent);

    function handleEvent(event) {
        console.log(event);
        console.log(event.target.value);
    }
//if statements


let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          

