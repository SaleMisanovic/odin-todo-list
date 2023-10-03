import {renderItems} from "./index.js"

const navList = document.querySelector("ul");

const navDom = () => {
  navList.innerHTML = "";
  const navProject = document.createElement("li");
  navList.appendChild(navProject);

  const navProjectName = document.createElement("a");
  navProject.appendChild(navProjectName);
  navProjectName.innerText = "Home";
  navProjectName.classList.add("project")
  navProjectName.classList.add("home");
  navProjectName.addEventListener("click",function () {
    renderItems("home")
  });
};

const navDomProjects = (project)=>{
    const navProject = document.createElement("li");
    navList.appendChild(navProject);
  
    const navProjectName = document.createElement("a");
    navProject.appendChild(navProjectName);
    navProjectName.innerText = `${project.name}`;
    navProjectName.classList.add("project");
    navProjectName.addEventListener("click",function () {
      renderItems(`${project.name}`)
    });    
}

const navDomNotes = () => {
    const navProject = document.createElement("li");
    navList.appendChild(navProject);
  
    const navProjectName = document.createElement("a");
    navProject.appendChild(navProjectName);
    navProjectName.innerText = "Notes";
    navProjectName.classList.add("project")
    navProjectName.classList.add("notes")
  
  };

export {navDom};
export {navDomProjects};
export {navDomNotes};