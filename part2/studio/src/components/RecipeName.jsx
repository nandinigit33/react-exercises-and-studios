import recipedata from "./recipe.json";

function RecipeName() {
  //import return the name of the recipe as a level 1 header
  const recipeName = recipedata.name;
  return <h1>{recipeName}</h1>;
}
//if an array
{/* <div>
{recipes.map((recipe) => (
  <h1 key={recipe.id}>{recipe.name}</h1>
))}
</div> */}
export default RecipeName;

