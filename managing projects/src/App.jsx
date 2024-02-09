import Sidebar from "./Components/Sidebar.jsx";
import Main from "./Components/Main.jsx";
import NoProject from "./Components/NoProject.jsx";
import React, { useState, useRef } from "react";
import Modal from "./Components/Modal.jsx";
import SelectedProject from "./Components/SelectedProject.jsx";
function App() {
  const dialog = useRef();
  const [selectedProject, setSelectedProject] = useState();

  const [projects, setProjects] = useState({
    status: undefined,
    projects: [],
    tasks: [],
  });
  const [data, setData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const addTask = (text) => {
    setProjects((prev) => {
      let newTask = {
        task: text,
        id: Math.random(),
        projectId: prev.status,
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  };
  const deleteTask = () => {};

  const handleData = (key, value) => {
    setData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  const handleDeleteProject = (id) => {
    setSelectedProject();
    setProjects((prev) => {
      return {
        ...prev,
        projects: prev.projects.filter((project) => project.id !== id),
      };
    });
  };
  const handleStartAddingProject = () => {
    setSelectedProject();
    setProjects((prev) => {
      return {
        ...prev,
        status: null,
      };
    });
  };

  const addNewProject = () => {
    //validation
    if (
      data.title.trim() === "" ||
      data.description.trim() === "" ||
      data.dueDate.trim() === ""
    ) {
      dialog.current.open();

      return;
    }

    setProjects((prev) => {
      let newProject = {
        ...data,
        id: Math.random(),
      };
      return {
        ...prev,
        status: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  };

  let content;
  if (projects.status === undefined) {
    content = <NoProject handleStartAddingProject={handleStartAddingProject} />;
  } else {
    content = (
      <Main addNewProject={addNewProject} handlData={handleData} input={data} />
    );
  }
  if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        handleDeleteProject={handleDeleteProject}
        addTask={addTask}
        deleteTask={deleteTask}
        tasks={projects.tasks}
      />
    );
  }

  return (
    <>
      <Modal ref={dialog}>
        <h2 className=" font-bold text-2xl mb-4">Invalid Input</h2>
        <p className=" mb-2">Oops..you forget to add value</p>
        <p className="">
          Please make sure you provide every value for every input field.
        </p>
      </Modal>
      <div className="grid grid-cols-[1fr_3fr_1fr] grid-rows-[1fr] items-center justify-center h-screen border-2 gap-8">
        <Sidebar
          setSelectedProject={setSelectedProject}
          projects={projects.projects}
          handleStartAddingProject={handleStartAddingProject}
          selectedProject={selectedProject}
        />
        <div className="shadow-2xl m-auto my-2 px-3 py-3 border-2 w-full">
          {content}
        </div>
      </div>
    </>
  );
}

export default App;
