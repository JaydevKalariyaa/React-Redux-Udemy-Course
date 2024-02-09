import React, { useState } from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
export default function Main({ addNewProject, handlData, input }) {
  return (
    <main className="px-2 py-5 flex gap-8 flex-col ">
      <menu className="flex justify-end gap-2">
        <button className="px-4 py-1 bg-slate-200 text-black rounded-lg hover:bg-gray-300">
          Cancel
        </button>
        <button
          onClick={addNewProject}
          className="px-4 py-1 bg-slate-950 text-white rounded-lg hover:bg-gray-800"
        >
          Save
        </button>
      </menu>
      <div className="">
        <Input
          label="TITLE"
          onChange={(e) => handlData("title", e.target.value)}
        />
        <Input
          label="DESCRIPTION"
          textarea
          onChange={(e) => handlData("description", e.target.value)}
        />
        <Input
          type="date"
          label="DUE DATE"
          onChange={(e) => handlData("dueDate", e.target.value)}
        />
      </div>
    </main>
  );
}
