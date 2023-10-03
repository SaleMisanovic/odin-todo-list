const content = document.querySelector(".content");


const clearDomItems = () => {
    content.innerHTML = "";
}

const itemsDomAll = (item) =>{

    const projectItem = document.createElement("div");
    content.appendChild(projectItem);
    projectItem.classList.add("project-item") 

    const projectItemName = document.createElement("div");
    projectItemName.innerText = `${item.name}`;
    projectItem.appendChild(projectItemName);

    const projectItemDesc = document.createElement("div");
    projectItemDesc.innerText = `${item.description}` ;
    projectItem.appendChild(projectItemDesc);

    const projectItemDueDate = document.createElement("div");
    projectItemDueDate.innerText = `${item.dueDate}` ;
    projectItem.appendChild(projectItemDueDate);

    const projectItemPriority = document.createElement("div");
    projectItemPriority.innerText = `${item.priority}` ;
    projectItem.appendChild(projectItemPriority);

};

export {itemsDomAll};
export {clearDomItems};