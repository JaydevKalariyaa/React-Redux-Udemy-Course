import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Post from "../components/Post";
import classes from "./Posts.module.css";
import axios from "axios";
import { getPosts } from "../RequestBackend";
import { useQuery } from "@tanstack/react-query";
export default function Posts() {
  const { data, isPending, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (error) return error;
  return (
    <>
      <Outlet />
      <main className={classes.posts}>
        {isPending && <p>Loading Posts...</p>}
        {data &&
          data.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
      </main>
    </>
  );
}
