
let selectElem = document.querySelector('select');
let logo = document.querySelector('#logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.classList.add('dark')
        logo.src = 'byui-logo-white.webp'
    } 
    else {
        document.body.classList.remove('dark')
        logo.src = 'byui-logo-blue.webp'
        // code for changes to colors and logo
    }
}           
                      