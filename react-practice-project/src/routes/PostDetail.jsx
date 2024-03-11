import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../RequestBackend";
import Modal from "../components/Modal";
import classes from "./PostDetail.module.css";
import { AnimatePresence } from "framer-motion";
export default function PostDetail() {
  const { id } = useParams();

  const { data, isPending, error } = useQuery({
    queryKey: ["post"],
    queryFn: () => getPost(id),
  });

  if (error) return error;
  return (
    <div className="post">
      {isPending && <p>LOADING..</p>}
      {data && (
        <>
          {/* <h1>{data.body}</h1>
          <p>{data.author}</p> */}
          <AnimatePresence>
            <Modal>
              <main className={classes.details}>
                <p className={classes.author}>{data.author}</p>
                <p className={classes.text}>{data.body}</p>
              </main>
            </Modal>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
