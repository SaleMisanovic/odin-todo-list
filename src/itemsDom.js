import {addNewItem, addNewNote, changeStatus, deleteItem,deleteProject} from "./index.js"

const content = document.querySelector(".content");


const clearDomItems = () => {
    content.innerHTML = "";
}

const itemsDomAll = (item) =>{

    const projectItem = document.createElement("div");
    content.appendChild(projectItem);
    projectItem.classList.add("project-item");
    projectItem.classList.add(item.priority);  

    const projectItemName = document.createElement("div");
    projectItemName.innerText = `${item.name}`;
    projectItem.appendChild(projectItemName);

    const projectItemDesc = document.createElement("div");
    projectItemDesc.innerText = `${item.description}` ;
    projectItem.appendChild(projectItemDesc);

    const projectItemDueDate = document.createElement("div");
    projectItemDueDate.innerText = `${item.dueDate}` ;
    projectItem.appendChild(projectItemDueDate);

    const projectItemChecked = document.createElement("input");
    projectItemChecked.type = "checkbox";
    projectItemChecked.checked = item.checked;
    projectItemChecked.addEventListener("click",function() {
        changeStatus(item);
    })
    if (item.checked == true) {
        projectItem.classList.add("opacity")
      }
    projectItem.appendChild(projectItemChecked);

    const projectItemDelete = document.createElement("button");
    //projectItemDelete.innerText = "Delete";
    projectItemDelete.addEventListener("click",function () {
        deleteItem(item);
    })
    projectItem.appendChild(projectItemDelete)


};

const itemsDomAdd = () =>{
    const itemNew = document.createElement("div");
    content.appendChild(itemNew);
    itemNew.classList.add("item-new");

    const itemNewButton = document.createElement("button");
    itemNew.appendChild(itemNewButton);
    itemNewButton.innerText = "+ Add New Item";
    itemNewButton.addEventListener("click", function () {
        addNewItem();
    })
}

const itemsDomProjectRemove = () =>{
    const projectDelete = document.createElement("div");
    content.appendChild(projectDelete);
    projectDelete.classList.add("item-new");

    const itemDeleteButton = document.createElement("button");
    projectDelete.appendChild(itemDeleteButton);
    itemDeleteButton.innerText = "- Delete Project";
    itemDeleteButton.addEventListener("click", function () {
        deleteProject();
    })
}

const notesDomAll = (note) =>{

    const noteItem = document.createElement("div");
    content.appendChild(noteItem);
    noteItem.classList.add("note-item") 

    const noteItemName = document.createElement("div");
    noteItemName.innerText = `${note.name}`;
    noteItem.appendChild(noteItemName);

    const noteItemDesc = document.createElement("div");
    noteItemDesc.innerText = `${note.description}`;
    noteItem.appendChild(noteItemDesc);

    const noteItemDelete = document.createElement("button");
    //noteItemDelete.innerText = "Delete";
    noteItemDelete.addEventListener("click",function () {
        deleteItem(note);
    })
    noteItem.appendChild(noteItemDelete)

};

const notesDomAdd = () =>{
    const noteNew = document.createElement("div");
    content.appendChild(noteNew);
    noteNew.classList.add("note-new");

    const noteNewButton = document.createElement("button");
    noteNew.appendChild(noteNewButton);
    noteNewButton.innerText = "+ Add New Note";
    noteNewButton.addEventListener("click",function () {
        addNewNote();
    })
}

export {itemsDomAdd};
export {itemsDomProjectRemove};
export {notesDomAdd};
export {notesDomAll};
export {itemsDomAll};
export {clearDomItems};