import NewTask from "../Components/NewTask";
import React, { useState } from "react";

export default function Task({ tasks, addTask, deleteTask, projectId }) {
  console.log(projectId);
  return (
    <div>
      <NewTask addTask={addTask} />
      <ul>
        {tasks?.map((task, i) => {
          return (
            <>
              {projectId === task.projectId && (
                <li key={i}>
                  <strong>TASK-{i}:</strong> &nbsp; &nbsp; &nbsp;
                  {task.task} <hr />
                </li>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
}
