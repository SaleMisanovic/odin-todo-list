import "./style.css";
import Project from "./project";
import { navDom } from "./navDom";
import { navDomProjects, navDomProjectNew } from "./navDom";
import { navDomNotes } from "./navDom";
import Item from "./item";
import { itemsDomAll, notesDomAdd, notesDomAll, itemsDomAdd } from "./itemsDom";
import { clearDomItems } from "./itemsDom";
import Note from "./note";
import Background from './background.jpg'

const myBackground = new Image();
myBackground.src = Background;


const projects = [];
const makeover = new Project("Makeover");
projects.push(makeover);
const hunting = new Project("Hunting");
projects.push(hunting);
const housework = new Project("Housework");
projects.push(housework);

function renderNav() {
  navDom();
  projects.forEach((project) => {
    navDomProjects(project);
  });
  navDomProjectNew();
  navDomNotes();
}
renderNav();

const items = [];
const gun = new Item(
  "Berreta",
  "Buy a Berreta from Steve",
  "22.4.2024",
  "High",
  "Hunting",
   false
);
items.push(gun);
const dog = new Item("Dog", "Train the dog", "12.5.2024", "Medium", "Hunting", true);
items.push(dog);
const paint = new Item(
  "Paint",
  "Paint the room",
  "12.4.2024",
  "Medium",
  "Housework",
  true
);
items.push(paint);

const notes = [];
const shirt = new Note("Iron", "Iron the new shirt");
notes.push(shirt);
const book = new Note("Book", "Read the book");
notes.push(book);

function changeStatus(item) {
  item.checked = !item.checked;
}

let openProject = "";

// instead of visibilty add display ? see: odin library
//move dom elements
//prevent duplicate projects
function addNewNote() {
  const newNoteBox = document.querySelector(".note-new-box");
  newNoteBox.style.display = "block";

  const newNoteCancelButton = document.querySelector("#cancelNote");
  newNoteCancelButton.addEventListener("click", function () {
    closeForm();
  });
}

const formNote = document.getElementById("formNote");
formNote.addEventListener("submit", (e) => {
  e.preventDefault();

  const myFormData = new FormData(e.target);

  const formDataObj = Object.fromEntries(myFormData.entries());
  const newNote = new Note(formDataObj.name, formDataObj.description);
  notes.push(newNote);
  renderItems("notes");
  closeForm();
});

function addProjectNew() {
  const newProjectBox = document.querySelector(".project-new-box");
  newProjectBox.style.display = "block";

  const newProjectCancelButton = document.querySelector("#cancelProject");
  newProjectCancelButton.addEventListener("click", function () {
    closeForm();
  });
}

const formProject = document.getElementById("formProject");
formProject.addEventListener("submit", (e) => {
  e.preventDefault();

  const myFormData = new FormData(e.target);

  const formDataObj = Object.fromEntries(myFormData.entries());
  const newProject = new Project(formDataObj.name);
  projects.push(newProject);
  console.log(projects);
  renderNav();
  closeForm();
});

function addNewItem() {
  const newItemBox = document.querySelector(".item-new-box");
  newItemBox.style.display = "block";

  const newItemCancelButton = document.querySelector("#cancelItem");
  newItemCancelButton.addEventListener("click", function () {
    closeForm();
  });
}

const formItem = document.getElementById("formItem");
formItem.addEventListener("submit", (e) => {
  e.preventDefault();

  const myFormData = new FormData(e.target);

  const formDataObj = Object.fromEntries(myFormData.entries());

  const newItem = new Item(formDataObj.name, formDataObj.description, formDataObj.dueDate, formDataObj.priority, openProject );
  items.push(newItem);
  renderItems(openProject.toString());
  closeForm();
});

function closeForm() {
  const newNoteBox = document.querySelector(".note-new-box");
  newNoteBox.style.display = "none";

  const newProjectBox = document.querySelector(".project-new-box");
  newProjectBox.style.display = "none";

  const newItemBox = document.querySelector(".item-new-box");
  newItemBox.style.display = "none";
}


function renderItems(value) {
  clearDomItems();
  if (value === "home") {
    items.forEach((item) => {
      itemsDomAll(item);
    });
  } else if (value === "notes") {
    notes.forEach((note) => {
      notesDomAll(note);
    });
    notesDomAdd();
  } else if (value !== "home") {
    let newValue = value;
    value = newValue;
    openProject = value;
    let results = items.filter(function (el) {
      return el.project == value;
    });
    results.forEach((item) => {
      itemsDomAll(item);
    });
    itemsDomAdd();
  }
}
renderItems("home");

export { renderItems };
export { addNewNote };
export {addNewItem};
export {addProjectNew};
export { closeForm };
export {changeStatus};
