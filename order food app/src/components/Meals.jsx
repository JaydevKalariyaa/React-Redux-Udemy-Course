import { useEffect, useState } from "react";
import axios from "axios";
import MealItem from "./MealItem";
export default function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function getMeals() {
      try {
        let { data } = await axios.get("http://localhost:3000/meals");
        setMeals(data);
      } catch (err) {
        console.log(err);
      }
    }
    getMeals();
  }, []);
  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
}
