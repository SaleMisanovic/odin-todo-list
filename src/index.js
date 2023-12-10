import "./style.css";
import Project from "./project";
import { navDom } from "./navDom";
import { navDomProjects, navDomProjectNew } from "./navDom";
import { navDomNotes } from "./navDom";
import Item from "./item";
import { itemsDomAll, notesDomAdd, notesDomAll, itemsDomAdd, itemsDomProjectRemove } from "./itemsDom";
import { clearDomItems } from "./itemsDom";
import Note from "./note";
import Background from './background.jpg'
import Delete from './delete.png'

const myBackground = new Image();
myBackground.src = Background;

const myDelete = new Image();
myDelete.src = Delete;


const projects = [];
populateDataFromLocalStorage('projectsKey',projects);

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
populateDataFromLocalStorage('itemsKey',items);

const notes = [];
populateDataFromLocalStorage('notesKey',notes);

function changeStatus(item) {
  item.checked = !item.checked;
  saveDataToLocalStorage(items, 'itemsKey');
  renderItems(openProject);
  console.log(openProject);
}

function deleteItem(item) {
  items.splice(items.indexOf(item),1);
  saveDataToLocalStorage(items, 'itemsKey');
  renderItems(openProject);
  console.log(openProject)
}

let openProject = "home";

//add local storage
function saveDataToLocalStorage(dataArray,key) {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem(key,JSON.stringify(dataArray));
  }else{
    alert("Sorry,local storage not supported")
  }
}
function populateDataFromLocalStorage(key,targetArray) {
  if (typeof Storage !=='undefined') {
    const storedData = localStorage.getItem(key);

    if(storedData){
      const parsedData = JSON.parse(storedData);
      targetArray.length = 0;

      parsedData.forEach(item=>{
        targetArray.push(item);
      });
    }
  }else{
    alert("Sorry,local storage not supported")
  }
}


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
  saveDataToLocalStorage(notes, 'notesKey');
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

  let projectExists = false;
  for (let i = 0; i < projects.length; i++) {
    if(projects[i].name===newProject.name){
      alert("Project name already exists!")
      projectExists = true;
      break
    }
  }
  if (!projectExists) {
    projects.push(newProject)
  }
  saveDataToLocalStorage(projects, 'projectsKey');


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

function deleteProject() {
  //delete items related to project
  let itemsToDelete = items.filter(function (el){
    return el.project === openProject;
  });
  itemsToDelete.forEach((item) => {
    deleteItem(item);
  })
//delete project
  const index = projects.findIndex((i=>{
    return i.name=== openProject;
  }))
  projects.splice(index,1);
  saveDataToLocalStorage(projects, 'projectsKey');
  renderNav();
  renderItems("home") 
}

const formItem = document.getElementById("formItem");
formItem.addEventListener("submit", (e) => {
  e.preventDefault();

  const myFormData = new FormData(e.target);

  const formDataObj = Object.fromEntries(myFormData.entries());

  const newItem = new Item(formDataObj.name, formDataObj.description, formDataObj.dueDate, formDataObj.priority, openProject );
  items.push(newItem);
  saveDataToLocalStorage(items, 'itemsKey');
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
    openProject = value;
    items.forEach((item) => {
      itemsDomAll(item);
    });
  } else if (value === "notes") {
    openProject = value;
    notes.forEach((note) => {
      notesDomAll(note);
    });
    notesDomAdd();
  } else if (value !== "home") {
    //let newValue = value;
    //value = newValue;
    openProject = value;
    let results = items.filter(function (el) {
      return el.project == value;
    });
    results.forEach((item) => {
      itemsDomAll(item);
    });
    itemsDomAdd();
    itemsDomProjectRemove();
  }
}
renderItems("home");

export { renderItems };
export {deleteProject};
export { addNewNote };
export {addNewItem};
export {addProjectNew};
export { closeForm };
export {changeStatus};
export {deleteItem}
