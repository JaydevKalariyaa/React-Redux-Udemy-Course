import React from "react";
import Button from "./Button";

const Sidebar = ({
  projects,
  handleStartAddingProject,
  setSelectedProject,
  selectedProject,
}) => {
  return (
    <aside className="text-sm  bg-black text-stone-50 border-2 rounded my-2 px-3 py-3 text-center h-screen">
      <h1 className="text-center font-bold text-2xl mb-8 ">YOUR PROJECT</h1>

      <Button onClick={handleStartAddingProject}>➕ Add Projects</Button>
      <div className="mb-4"></div>
      {projects?.length > 0 ? (
        projects.map((project) => (
          <>
            <div
              key={project.id}
              className=" text-black px-2 py-1 my-2 rounded "
            >
              <button
                onClick={() => setSelectedProject(project)}
                className={`text-left w-full px-2 py-1 ${
                  selectedProject?.id !== project?.id
                    ? "bg-stone-300"
                    : "bg-blue-400"
                } rounded text-lg font-bold hover:bg-stone-400`}
              >
                {project.title}
              </button>
              {/* <h3 className="text-lg font-bold">{project.title}</h3>
            <p>{project.id}</p>
            <p>{project.description}</p>
            <p>{project.dueDate}</p> */}
            </div>
          </>
        ))
      ) : (
        <p>No Projects</p>
      )}
    </aside>
  );
};

export default Sidebar;
