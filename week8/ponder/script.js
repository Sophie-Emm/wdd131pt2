// JavaScript Objects

const aCourse = {
    name : "Dynamic Web Fundamentals",
    code : "WDD131",
    credits : 2,
    sections : [
        {
            sectionNum: 1,
            roomNum: 'STC 221',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 221',
            enrolled: 9,
            days: 'MWF',
            instructor: 'Bro Warner'
        }
    ],
    enrolled : function(sectionNum) {
        console.log(this.name);
    }
};


console.log(aCourse.name);

aCourse.enrolled(1);

//event listener when button is pressed
document.querySelector("#enrollStudent").addEventListener("click", (e) => {
    //when pressed find the section they entered
    let sectionNumber = document.querySelector("#sectionNumber").value.trim();
    //increment the enrolled count for that section by 1
    aCourse.sections.forEach(section => {
        //is this the section they update?
        if(section.sectionNum == sectionNumber) {
            //increase the enrollment by 1 of just this section
            section.enrolled += 1;
        }
    
        console.log(section.sectionNum);
        console.log(section.enrolled);
    });
    

    //re-render the the table with updated info
    renderSections(aCourse.sections);
});
function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);