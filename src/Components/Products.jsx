import { useEffect } from "react";
import { useState } from "react";
import { fetchMealfromDb } from "../https";
import MealItem from "./MealItem";

function Products() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchdb() {
      const result = await fetchMealfromDb();
      setMeals(result);
      console.log(result);
    }
    fetchdb();
  }, []);

  return (
    <ul id="meals">
      {meals.map((item) => (
       <MealItem mealItem={item}/>
      ))}
    </ul>
  );
}

export default Products;
