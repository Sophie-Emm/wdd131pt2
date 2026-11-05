
const form = document.querySelector("#eventform");
const userType = document.querySelector("#user");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const typeBoxes = document.querySelectorAll('input[name="users"]');

function updateNotesField() {
  const value = userType.value;
}

userType.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getSelectedType() {
  //.from converts a NodeList into a real array, so then you can use .filter and .map
  return Array.from(typeBoxes)
    .filter(box => box.checked)
    .map(box => box.value); 
}

form.addEventListener("submit", function (event) {
  //stops value from being put in url
  //stops page from reloading
  event.preventDefault();
  console.log(event.target.email.value);


  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = userType.value;
  const availableDate = form.availableDate.value;
  const selectedType = getSelectedType();
  const note = form.notes.value.trim();

  // Validate the input
  // Let the user know to select at least one user type
  if (selectedType.length === 0) {
    output.textContent = "Please select a user type, student or guest";
    return;
  }
  // Let the user know if they choose student they need to provide an id number
  if (type === "student" && !form.idNumber.value.trim()) {
    output.textContent = "Please provide an ID number for students.";
    return;
  }
  // Let the user know if they choose guest they need to provide event ID
  else if (type === "guest" && !form.eventId.value.trim()) {
    output.textContent = "Please provide an event ID for guests.";
    return;
  }

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${availableDate}</p>
  <p>Types: ${selectedType.join(", ")}</p>
  <p>Preference Level: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});