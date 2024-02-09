import { useRef, useState } from "react";
import Nav from "./Nav";

function App() {
  const [name, setName] = useState("");
  const nameref = useRef();

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center text">
        Tailwind css
      </h1>
      <Nav />
      {name && name}
      <div className="jk  ">
        <input
          type="text"
          ref={nameref}
          className="jk border-2 border-gray-950 text-black"
        />
        <button onClick={() => setName(nameref.current.value)}>Click</button>
      </div>
    </>
  );
}

export default App;
