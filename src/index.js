import "./style.css";
import Project from "./project";
import { navDom } from "./navDom";
import { navDomProjects } from "./navDom";
import { navDomNotes } from "./navDom";
import Item from "./item";
import { itemsDomAll } from "./itemsDom";
import { clearDomItems } from "./itemsDom";

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

const items = [];
const gun = new Item("Berreta","Buy a Berreta from Steve","22.4.2024","High","Hunting")
items.push(gun);
const dog = new Item("Dog","Train the dog","12.5.2024","Medium","Hunting")
items.push(dog);
const paint = new Item("Paint","Paint the room","12.4.2024","Medium","Housework")
items.push(paint);

function renderItems(value){
    clearDomItems();
    if (value ==="home")  {
        items.forEach(item => {
            itemsDomAll(item);
        });
    }else if(value!=="home"){
        let newValue = value;
        value = newValue;
        let results =  items.filter(function(el){
            return el.project == value;
        });
        results.forEach(item => {
            itemsDomAll(item);
        });
    }
};
renderItems("home");

export {renderItems}