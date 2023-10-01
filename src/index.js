import "./style.css";
import Project from "./project";
import { navDom } from "./navDom";
import { navDomProjects } from "./navDom";
import { navDomNotes } from "./navDom";

const projects = [];
const makeover =  new Project("Makeover");
projects.push(makeover);
const hunting =  new Project("Hunting");
projects.push(hunting);
const housework =  new Project("Housework");
projects.push(housework);

function renderNav(){
    navDom();
    projects.forEach(project => {
        navDomProjects(project);
    });
    navDomNotes();
};
renderNav();


