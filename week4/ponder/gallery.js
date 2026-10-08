// .1 retrieve elements from the DOM
let dialog = document.querySelector('dialog');
let gallery = document.querySelector('.gallery');
let dialogImg = dialog.querySelector('img');
let closeBtn = dialog.querySelector('.close');

// .2 add event listener to show
gallery.addEventListener('click', function(event) {
    console.log(event.target.src);
    //swap out src of dialog img
    if (event.target.src !== undefined) {
        dialogImg.src = event.target.src.replace("-sm", "-full");
        // show the dialog
        dialog.showModal();
    }
});

// .3 add event listener to close
closeBtn.addEventListener('click', () => {
    dialog.close();
});

// Close modal if clicking outside the image
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});
          