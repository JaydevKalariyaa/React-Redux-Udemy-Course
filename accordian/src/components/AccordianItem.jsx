import React, { useContext } from "react";
import { AccordianContext } from "./Accordian";
export default function AccordianItem({ title, description, id }) {
  const { openItem, closeItem, cid } = useContext(AccordianContext);
  let isOpen = cid === id;
  const handleClick = () => {
    if (isOpen) {
      closeItem();
    } else {
      openItem(id);
    }
  };
  return (
    <>
      <li className="accordion-item">
        <h1 className="accordion-item-title" onClick={handleClick}>
          {title}
        </h1>
        <div
          className={`accordion-item-content ${isOpen ? "open" : undefined}`}
        >
          {description}
        </div>
      </li>
    </>
  );
}
