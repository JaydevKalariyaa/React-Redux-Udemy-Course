"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
import { uploadImage } from "@/lib/cloudinary";
export default function ImagePicker({ label, name }) {
  const [previewImage, setPreviewImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }
  function handlePreview(e) {
    let file = e.target.files[0];
    if (!file) {
      setPreviewImage(null);
      return;
    }
    let fileReader = new FileReader();

    fileReader.onload = async (event) => {
      setPreviewImage(fileReader.result);
      const { url } = await uploadImage(event.target.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!previewImage && <p>No image Selected</p>}
          {previewImage && (
            <Image src={previewImage} alt="preview of image" fill />
          )}
        </div>

        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handlePreview}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
