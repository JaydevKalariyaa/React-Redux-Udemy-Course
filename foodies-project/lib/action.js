"use server";
import { redirect } from "next/navigation";
import { addMeal } from "@/lib/meal";
import { revalidatePath } from "next/cache";
const validation = ({ name, email, title, summary, instructions, image }) => {
  let msg = [];
  if (name === "") {
    msg.push("name not to be an empty!!");
  }
  if (email === "") {
    msg.push("email not to be an empty!!");
  }
  if (title === "") {
    msg.push("title not to be an empty!!");
  }
  if (summary === "") {
    msg.push("summary not to be an empty!!");
  }
  if (instructions === "") {
    msg.push("instructions not to be an empty!!");
  }
  if (!email.includes("@")) {
    msg.push("Email is not valid!!");
  }
  if (image === "") {
    msg.push("select an valid image!!");
  }
  return msg;
};

export const shareMeal = async (prevState, formData) => {
  let errors = validation(formData);
  if (errors.length !== 0) {
    return { error: errors };
  }
  await addMeal(formData);
  revalidatePath("/meals");
  redirect("/meals");
};
