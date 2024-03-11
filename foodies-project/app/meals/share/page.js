"use client";
import classes from "./page.module.css";
import ImagePicker from "@/components/meals/image-picker";
import { shareMeal } from "@/lib/action";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadImage } from "@/lib/cloudinary";
import { Button } from "@/components/meals/meals-form-submit";
export default function ShareMealPage() {
  const [state, shareMealAction] = useFormState(shareMeal, { error: [] });

  useEffect(() => {
    if (state?.error.length > 0) {
      //backend error of validations
      state.error.map((error) => {
        toast.error(error);
      });
    }
  }, [state?.error]);

  function getImageUrlFromFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageUrl = e.target.result;
        resolve(imageUrl);
      };
      reader.onerror = function (error) {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    data = Object.fromEntries(data);
    const imageUrl = await getImageUrlFromFile(data.image);
    const { url } = await uploadImage(imageUrl);
    data.image = url;
    shareMealAction(data);
  };
  return (
    <>
      <ToastContainer />
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form
          className={classes.form}
          // action={shareMealAction}
          onSubmit={handleSubmit}
        >
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="text" id="email" name="email" />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Pick an Image" name="image" />
          <p className={classes.actions}>
            <Button />
          </p>
        </form>
      </main>
    </>
  );
}
