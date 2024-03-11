import React, { useRef } from "react";
import Modal from "../components/Modal";
import classes from "./NewPosts.module.css";
import { addPost } from "../RequestBackend";
import { redirect, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../RequestBackend";
import { AnimatePresence } from "framer-motion";

export default function NewPosts() {
  const navigate = useNavigate();
  const titleRef = useRef();
  const descRef = useRef();
  const { isPending, error, mutate } = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      navigate("/");
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      author: titleRef.current.value,
      body: descRef.current.value,
    };
    mutate(newPost);
  };
  return (
    <>
      <AnimatePresence>
        <Modal>
          <form onSubmit={handleSubmit} className={classes.form}>
            <label htmlFor="Author">Enter Author:</label> <br />
            <input type="text" id="Author" ref={titleRef} /> <br />
            <label htmlFor="body">Enter Description:</label> <br />
            <input type="text" id="body" ref={descRef} /> <br />
            <button>Submit</button>
          </form>
        </Modal>
      </AnimatePresence>
    </>
  );
}
