import React, { forwardRef } from "react";

export default forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <div className="mb-4">
      <label htmlFor={label}>{label}</label>
      {textarea ? (
        <textarea
          className="w-full bg-gray-300 rounded py-1 px-2 border-1 focus:outline-none focus:border-stone-600"
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className="w-full bg-gray-300 py-1 px-2 rounded focus:outline-none border-1 focus:border-stone-600 hover:border-none"
          {...props}
        />
      )}
    </div>
  );
});
