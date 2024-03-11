import { getMeal } from "@/lib/meal";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
export default function Meal({ params }) {
  const meal = getMeal({ slug: params.slug });

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            Created by
            <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <div className={styles.instructions}>
          <h2>Instructions</h2>
          <p dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
        </div>
      </main>
    </>
  );
}
