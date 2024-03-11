import React, { useState } from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
export default function Modal({ children }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className={classes.backdrop} onClick={handleClick} />
      <motion.dialog
        open
        className={classes.modal}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 50, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.9 }}
      >
        {children}
        <button onClick={handleClick}>Close</button>
      </motion.dialog>
    </>
  );
}
