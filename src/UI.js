import "./style.css";
import { ProjectCTL, showAllPriject } from "./data.js"




const menuBtn = document.querySelector(".menuBtn");
const sideBar = document.querySelector(".sidebar");
const projectsList = document.querySelector(".projectsLIst");

function liveEventListener() {
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
liveEventListener();

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


ProjectCTL.removeProject("test");
addProjectsToUiList()



export default liveEventListener;
