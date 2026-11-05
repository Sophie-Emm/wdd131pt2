// 1. add event listener to the button 
document.querySelector('#rollButton').addEventListener("click", event => {
    //animate the die
        
    const images = document.querySelectorAll('#gameboard img');
    images.forEach(image => {
        //switch the src to the dice_rolling.gif animation
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });

    //change the value each die lands on randomly
            //changing the src images

    setTimeout(() => {
        images.forEach(image => {
            if(!isDieUnlocked(image)) {
                const randomNum = Math.floor(Math.random() * 6) + 1;
                image.src = `assets/white_dice_${randomNum}.gif`;
                //set the img to a random die
            }
        });
    }, 2000);
});

//create a function where we can keep 
function isDieUnlocked(dieImage) {
    //is the corrosponding checkbox checked?
    const checkboxes = document.querySelectorAll('#gameboard input');

    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return unchecked.find(unchecked => unchecked.className === dieImage.className);

}