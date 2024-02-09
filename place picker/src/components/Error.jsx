import React from "react";

export default function Error({ title, message, onConfirm }) {
  return (
    <div className="error">
      <h1>{title}</h1>
      <p className="error-msg">{message}</p>
      <button className="button" onClick={onConfirm}>
        Okay
      </button>
    </div>
  );
}
