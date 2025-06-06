 //import json file for the data
import recipe from './recipe.json';
import './styling.css';

function RecipeImage() {
   return (
   <div>
   <img
     src={recipe.recipeImage}
     alt={recipe.name}
     className="recipeImage"
   />
 </div>
   );
 }
 
 export default RecipeImage;
 

 //apply css for className recipeImage
 


