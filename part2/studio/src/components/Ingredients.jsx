//import json file for the data
import recipe from './recipe.json';
function IngredientList() {
   return(
    //use a nested map to get inside the inner array
    <div>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 