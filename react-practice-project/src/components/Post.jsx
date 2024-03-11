import React from "react";
import classes from "./Post.module.css";
import { NavLink } from "react-router-dom";
export default function Post({ post }) {
  return (
    <>
      <NavLink to={post.id}>
        <div className={classes.post}>
          <p className={classes.body}>{post.body}</p>
          <p className={classes.author}>
            <i>{post.author}</i>
          </p>
        </div>
      </NavLink>
    </>
  );
}
