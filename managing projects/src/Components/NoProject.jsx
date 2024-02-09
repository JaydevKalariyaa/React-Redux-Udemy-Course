import React from "react";
import img from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProject({ handleStartAddingProject }) {
  return (
    <>
      <main className="px-2 py-5 text-center flex-col ">
        <img
          src={img}
          alt="network problem"
          className="object-contain w-16 h-16 m-auto "
        />
        <p className="my-4 text-lg font-bold ">No Projects Added</p>

        <Button onClick={handleStartAddingProject}>➕ Add Projects</Button>
      </main>
    </>
  );
}
