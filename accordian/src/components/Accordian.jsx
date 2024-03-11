import React, { useState } from "react";
import AccordianItem from "./AccordianItem";
export const AccordianContext = React.createContext({
  cid: null,
  openItem: () => {},
  closeItem: () => {},
});

export default function Accordian({ children }) {
  const [id, setId] = useState();
  const openItem = (idd) => {
    setId(idd);
  };
  const closeItem = () => {
    setId(null);
  };
  const value = {
    cid: id,
    openItem,
    closeItem,
  };
  return (
    <>
      <AccordianContext.Provider value={value}>
        <ul className="accordion">{children}</ul>
      </AccordianContext.Provider>
    </>
  );
}
Accordian.item = AccordianItem;
