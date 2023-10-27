class project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.notes = [];
  }
}

class task {
  constructor(name) {
    this.name = name;
    this.completed = false;
    this.date = new Date();
  }
}

class note {
  constructor(name, content) {
    this.name = name;
    this.content = content;
    this.date = new Date();
  }
}

const ProjectCTL = (() => {
  const createProject = (name) => {
    if (!listOfProjects.includes(name)) {
      let newProject = new project(name);
      localStorage.setItem(name, JSON.stringify(newProject));

      listOfProjects.push(name);
      localStorage.setItem(
        "__lIST_OF_PROJECTS__",
        JSON.stringify(listOfProjects)
      );
    }
  };
  const removeProject = (name) => {
    // let newProject = new project(name);
    localStorage.removeItem(name);
    listOfProjects = listOfProjects.filter((item) => {
      return item != name;
    });
    localStorage.setItem(
      "__lIST_OF_PROJECTS__",
      JSON.stringify(listOfProjects)
    );
  };
  const addTask = (projectName, taskName) => {
    let newTask = new task(taskName);
    const selectedProject = JSON.parse(localStorage.getItem(projectName));
    selectedProject.tasks.push(newTask);
    localStorage.setItem(projectName, JSON.stringify(selectedProject));
  };
  const addNote = (projectName, noteName, content) => {
    let newNote = new note(noteName, content);
    const selectedProject = JSON.parse(localStorage.getItem(projectName));
    selectedProject.notes.push(newNote);
    localStorage.setItem(projectName, JSON.stringify(selectedProject));
  };
  const deleteTask = (projectName, taskName) => {
    const selectedProject = JSON.parse(localStorage.getItem(projectName));
    selectedProject.tasks = selectedProject.tasks.filter((task) => {
      return task.name != taskName;
    });
    localStorage.setItem(projectName, JSON.stringify(selectedProject));
  };
  const deleteNote = (projectName, noteName) => {
    const selectedProject = JSON.parse(localStorage.getItem(projectName));
    selectedProject.notes = selectedProject.notes.filter((note) => {
      return note.name != noteName;
    });
    localStorage.setItem(projectName, JSON.stringify(selectedProject));
  };
  const editTaskName = (projectName, taskName, newName) => {
    const selectedProject = JSON.parse(localStorage.getItem(projectName));
    selectedProject.tasks.map((task) => {
      if (task.name == taskName) task.name = newName;
    });
    localStorage.setItem(projectName, JSON.stringify(selectedProject));
  };
  const editTaskCompleted = (projectName, taskName) => {
    const selectedProject = JSON.parse(localStorage.getItem(projectName));
    selectedProject.tasks.map((task) => {
      if (task.name == taskName) task.completed = !task.completed;
    });
    localStorage.setItem(projectName, JSON.stringify(selectedProject));
  };
  const editNoteName = (projectName, noteName, newName) => {
    const selectedProject = JSON.parse(localStorage.getItem(projectName));
    selectedProject.notes.map((note) => {
      if (note.name == noteName) note.name = newName;
    });
    localStorage.setItem(projectName, JSON.stringify(selectedProject));
  };
  const editNoteContent = (projectName, noteName, newContent) => {
    const selectedProject = JSON.parse(localStorage.getItem(projectName));
    selectedProject.notes.map((note) => {
      if (note.name == noteName) note.content = newContent;
    });
    localStorage.setItem(projectName, JSON.stringify(selectedProject));
  };
  const showProject = (Pname) => {
    let PList = JSON.parse(localStorage.getItem(Pname));
    return PList;
  };

  return {
    createProject,
    addTask,
    deleteTask,
    addNote,
    deleteNote,
    editTaskName,
    editTaskCompleted,
    editNoteName,
    editNoteContent,
    removeProject,
    showProject,
  };
})();

let listOfProjects = JSON.parse(localStorage.getItem("__lIST_OF_PROJECTS__"));
if (listOfProjects.length == 0) {
  localStorage.setItem("__lIST_OF_PROJECTS__", JSON.stringify([]));
}

function showListOfPriject(listOfProjects) {
  return listOfProjects;
}

function showAllPriject() {
  return showListOfPriject(listOfProjects);
}
export { ProjectCTL, showAllPriject };
