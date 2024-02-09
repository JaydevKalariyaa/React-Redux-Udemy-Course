import Task from "./Task";

export default function SelectedProject({
  project,
  handleDeleteProject,
  addTask,
  deleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  console.log(project);
  return (
    <>
      <div className="my-5  w-2/3 m-auto">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-700 mb-2">
              {project.title}
            </h1>
            <button
              className="bg-red-600 text-white hover:bg-red-900 px-3 py-1 rounded"
              onClick={() => handleDeleteProject(project.id)}
            >
              Delete
            </button>
          </div>
          <p className="mb-4 text-stone-400">{formattedDate}</p>
          <p className="text-stone-700 whitespace-pre-wrap">
            {project.description}
          </p>
        </header>
        <Task
          tasks={tasks}
          addTask={addTask}
          deleteTask={deleteTask}
          projectId={project.status}
        />
      </div>
    </>
  );
}
