//nummber array
let numbers = ['one', 'two', 'three'];

numbers.forEach((number) => {
    console.log(number);
});

/* this does the same thing but writen in a different way
function printNumber(number) {
    console.log(number);
}
numbers.forEach(printNumber);
*/

//this calls elementfrom html
const myList = document.querySelector('#myList');
console.log(myList);

//map() creates a new array for the element. this also creates list item 1,2,3 (line19)
let newListItems = numbers.map((number) => {
    const item = `<li>${number}</li>`;
    return item;
});
console.log(newListItems.join(''));
myList.innerHTML = newListItems.join('');

//im not sure what this is yet, i think its converting the letter grade to a numeric value string=>int? im also not sure what to add
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
          
//student array
const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

//finds html element
const studentsContainer = document.querySelector('#studentContainer');
console.log(studentsContainer);      

//creates a div for each student and adds css format
students.forEach((student) => {
    let name = document.createElement('div');
    name.classList.add('format');

    const studentInfo = `<p>${student.first} ${student.last}</p><hr>`;
    //adds studentcontainer
    name.innerHTML = studentInfo;
    studentsContainer.appendChild(name);
});

//fruit array
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

//filters fruit arrayfor fruit that contains whatever is in the ()
const fruits = words.filter((fruit) => {
    return fruit.includes('w');
});
console.log(fruits);

/*
words.forEach((fruit) => {
    const indexNumber = words.indexOf(fruit);
    console.log(`The index of ${fruit} is ${indexNumber}`);
});
*/  