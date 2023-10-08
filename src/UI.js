import "./style.css";
import { ProjectCTL, showAllPriject } from "./data.js"




const menuBtn = document.querySelector(".menuBtn");
const sideBar = document.querySelector(".sidebar");
const projectsList = document.querySelector(".projectsLIst");
const addProject=document.querySelector(".addP")
const addProjectModal=document.querySelector(".addProjectModal")
const addProjectForm=document.querySelector("#form")



function responsivePage() {
  let active = false;
  menuBtn.addEventListener("click", () => {
    // console.log(document.body.offsetWidth);
    if (active) {
      sideBar.classList.remove("Active");
      active = !active;
    } else {
      sideBar.classList.add("Active");
      active = !active;
    }
  });

}
// responsivePage();

addProject.addEventListener('click',()=>{
  addProjectModal.classList.add("Active")
  sideBar.classList.remove("Active");

})

addProjectForm.onsubmit = (e) => {
  e.preventDefault()
  const Pname = document.getElementById('Pname').value
  console.log(Pname);
  addProjectModal.classList.remove("Active")
  form.reset()
  ProjectCTL.createProject(Pname)
  addProjectsToUiList()
  
}



function addProjectsToUiList(){
  projectsList.innerHTML=""
  for (let project of showAllPriject()) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");
    img.src="images/package-custom.png";
  
    p.innerHTML = project;
    li.appendChild(img);
    li.appendChild(p);
  
    projectsList.appendChild(li);
  }
}
addProjectsToUiList()



addProjectsToUiList()



export default responsivePage;
