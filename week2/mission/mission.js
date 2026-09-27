
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.classList.dark('dark')
        logo.src = 'byui-logo-blue.webp'
    } else {
     document.body.classList.remove('dark')
     logo.src = 'byui-logo-white.webp'
        // code for changes to colors and logo
    }
}           
                      