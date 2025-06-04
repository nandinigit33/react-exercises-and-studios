import styles from './Ingredients.module.css';

function RecipeIngredients() {
  const ingredients = [
    "200g spaghetti",
    "100g pancetta",
    "2 eggs",
    "50g Parmesan cheese",
    "Freshly ground black pepper"
  ];

  return (
    <div>
      <h3>Sphagetti Recipe Ingredients</h3>
      <ul className={styles.ingredientList}>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
}

export default RecipeIngredients;