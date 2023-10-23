import "./style.css";
import { ProjectCTL, showAllPriject } from "./data.js";

const menuBtn = document.querySelector(".menuBtn");
const sideBar = document.querySelector(".sidebar");
const projectsList = document.querySelector(".projectsLIst");
const addProject = document.querySelector(".addP");
const addProjectModal = document.querySelector(".addProjectModal");
const addTaskModal = document.querySelector(".addTaskModal");
const addNoteModal = document.querySelector(".addNoteModal");
const addProjectForm = document.querySelector("#form");
const addTaskForm = document.querySelector("#Taskform");
const addNoteForm = document.querySelector("#Noteform");
const content = document.querySelector(".content");
const addBtn = document.querySelector(".addTaskBtn");
const taskList = document.querySelector(".taskList");
const NoteList = document.querySelector(".NoteList");
const Tbtn = document.querySelector(".Tbtn");
const Nbtn = document.querySelector(".Nbtn");
const close = document.querySelectorAll(".close");
const deletProjectBtn = document.querySelector(".deletProjectBtn");

let active = false;
let selectedProject = showAllPriject()[0];
let addBtnState = "T";

deletProjectBtn.addEventListener("click", () => {
  ProjectCTL.removeProject(selectedProject);
  selectedProject = showAllPriject()[0];
  addProjectsToUiList();
  addTaskToUiList();
  addNoteToUiList();
});

close.forEach((c) => {
  c.addEventListener("click", () => {
    addProjectModal.classList.remove("Active");
    addTaskModal.classList.remove("Active");
    addNoteModal.classList.remove("Active");
  });
});

Tbtn.addEventListener("click", (e) => {
  console.log(e.target.style);
  taskList.style.display = "flex";
  NoteList.style.display = "none";
  addBtn.innerHTML = "Add Task";
  addBtnState = "T";
  sideBar.classList.remove("Active");
  active = !active;
});
Nbtn.addEventListener("click", () => {
  taskList.style.display = "none";
  NoteList.style.display = "flex";
  addBtn.innerHTML = "Add Note";
  addBtnState = "N";
  sideBar.classList.remove("Active");
  active = !active;
});

function responsivePage() {
  menuBtn.addEventListener("click", () => {
    if (active) {
      sideBar.classList.remove("Active");
      active = !active;
    } else {
      sideBar.classList.add("Active");
      active = !active;
    }
  });
}

addProject.addEventListener("click", () => {
  addProjectModal.classList.add("Active");
  sideBar.classList.remove("Active");
  active = !active;
});

addProjectForm.onsubmit = (e) => {
  e.preventDefault();
  const Pname = document.getElementById("Pname").value;
  addProjectModal.classList.remove("Active");
  ProjectCTL.createProject(Pname);
  addProjectsToUiList();
  form.reset();
};

function addProjectsToUiList() {
  projectsList.innerHTML = "";
  for (let project of showAllPriject()) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const btn = document.createElement("button");
    img.src = "images/package-custom.png";

    p.innerHTML = project;
    btn.classList.add("projectItem");

    btn.id = project;
    btn.appendChild(img);
    btn.appendChild(p);
    li.appendChild(btn);
    btn.addEventListener("click", (e) => {
      selectedProject = e.target.id;
      sideBar.classList.remove("Active");
      active = !active;
      addTaskToUiList();
      addNoteToUiList();
    });
    projectsList.appendChild(li);
  }
}

addBtn.addEventListener("click", () => {
  if (addBtnState == "T") {
    addTaskModal.classList.add("Active");
  } else if (addBtnState == "N") {
    addNoteModal.classList.add("Active");
  }
});
function addTaskToUiList() {
  taskList.innerHTML = "";
  console.log(localStorage);
  console.log(ProjectCTL.showProject(selectedProject));
  for (let t of ProjectCTL.showProject(selectedProject).tasks) {
    const div = document.createElement("div");
    div.classList.add("taskSection");
    div.innerHTML = t.name;
    taskList.appendChild(div);
  }
}
addTaskForm.onsubmit = (e) => {
  e.preventDefault();
  const Tname = document.getElementById("Tname").value;
  addTaskModal.classList.remove("Active");
  ProjectCTL.addTask(selectedProject, Tname);
  addTaskToUiList();
  form.reset();
};

function addNoteToUiList() {
  NoteList.innerHTML = "";
  for (let n of ProjectCTL.showProject(selectedProject).notes) {
    const div = document.createElement("div");
    div.classList.add("noteSection");
    div.innerHTML = n.name;
    NoteList.appendChild(div);
  }
}
addNoteForm.onsubmit = (e) => {
  e.preventDefault();
  const Nname = document.getElementById("Nname").value;
  const notetextarea = document.getElementById("notetextarea").value;
  addNoteModal.classList.remove("Active");
  ProjectCTL.addNote(selectedProject, Nname, notetextarea);
  addNoteToUiList();
  form.reset();
};

addProjectsToUiList();
addTaskToUiList();
addNoteToUiList();

export default responsivePage;
