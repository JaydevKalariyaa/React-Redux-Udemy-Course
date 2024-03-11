import fs from "node:fs";
const sql = require("better-sqlite3");
const db = sql("meals.db");
import xss from "xss";

export const getMeals = () => {
  return db.prepare("select * from meals").all();
};
export const getMeal = ({ slug }) => {
  return db.prepare("select * from meals where slug= ?").get(slug);
};

export const addMeal = async (m) => {
  const instructions = xss(m.instructions);

  // const extension = m.image.name.split(".").pop();
  // const imageName = `${m.title}.${extension}`;
  // let stream = fs.createWriteStream(`public/images/${imageName}`);
  // stream.write(Buffer.from(await m.image.arrayBuffer()), (error) => {
  //   if (error) throw new Error("fail to store image");
  // });

  // const image = `/images/${imageName}`;
  let meal = {
    slug: m.title,
    title: m.title,
    image: m.image,
    summary: m.summary,
    instructions: instructions,
    creator: m.name,
    creator_email: m.email,
  };

  return db
    .prepare(
      `insert into meals values(
     null,
    @slug,
    @title,
    @image,
    @summary,
    @instructions,
    @creator,
    @creator_email)`
    )
    .run(meal);
};

// const deleteMeal = () => {
//   return db.prepare("delete from meals").run();
// };
// deleteMeal();
