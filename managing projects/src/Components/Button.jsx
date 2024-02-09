import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      className="px-5 py-2 bg-gray-600 text-gray-300 hover:bg-gray-700 rounded"
      {...props}
    >
      {children}
    </button>
  );
}
