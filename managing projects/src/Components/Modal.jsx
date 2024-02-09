import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
export default forwardRef(function Modal({ children }, ref) {
  let dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <>
      <dialog
        className=" inset-0 z-10 overflow-y-auto relative bg-red-900 rounded text-white"
        ref={dialog}
      >
        <div className="flex items-center justify-center w-full">
          <div className="relative rounded-lg w-full max-w-md p-6 max-h-full py-10 overflow-y-auto ">
            {children}
            <form
              className=" rounded bg-white  absolute top-2 right-2"
              method="dialog"
            >
              <button className=" text-2xl font-bold rounded ">✖</button>
            </form>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById("modal-root")
  );
});
