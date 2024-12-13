import { currencyFormattor } from "../Util/formatting";
import Button from "./Button";

function MealItem({ mealItem }) {
  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${mealItem.image}`}
          alt={mealItem.name}
        />
        <div>
          <h3>{mealItem.name}</h3>

          <p className="meal-item-price">
            {currencyFormattor.format(mealItem.price)}{" "}
          </p>
          <p className="meal-item-description">{mealItem.description}</p>
        </div>

        <Button item={mealItem}>Add to cart</Button>
      </article>
    </li>
  );
}

export default MealItem;
