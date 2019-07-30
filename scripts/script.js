"use strict";

const myContacts = [];
function add(event) {
  event.preventDefault();
  myContacts.push({
    name: event.target[0].value,
    email: event.target[1].value,
    number: event.target[2].value,
    relationship: event.target[3].value
  });
  display();
}

function display() {
  document.querySelector(".info_container").innerHTML = "";
  myContacts.forEach((person, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <p>Name: ${person.name}</p>
        <p>Email: ${person.email}</p>
        <p>Phone Number: ${person.number}</p> 
        <p>Relationship: ${person.relationship}</p>
        <button index=${index} class="delete_btn"><i class="fas fa-trash"></i></button>
        `;
    document.querySelector(".info_container").append(div);
  });
}

document.querySelector("form").addEventListener("submit", add);

function deleteAt(event) {
  myContacts.splice(Number(event.target.attributes[0].value), 1);
  display();
}

document.querySelector(".info_container").addEventListener("click", deleteAt);
