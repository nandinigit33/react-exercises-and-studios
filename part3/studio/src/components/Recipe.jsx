import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://pinchofyum.com/vegan-lettuce-wraps";
   let authorPhoto = "https://pinchofyum.com/wp-content/assets/images/sidebar/sidebar-lindsay.jpg";
   let authorName = "Lind Say";

   return (
      <div className='card'>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>{authorLink}</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["peanut butter", "soy sauce", "sesame oil",  "rice vinegar", "Lettuce"];
   return(
      <div className='card'>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
         {/* <ul>
            {ingredients.map((ingredient, index) => (
               <li key={index}>{ingredient}</li>
            ))}
         </ul> */}
      </div>
   );
}

const RecipeDescription = () => {
   const title = "Firecracker Vegan Lettuce Wraps";
   const description = "Firecracker Lettuce Wraps that are happily vegan – with crispy tofu bits, saucy brown rice noodles, and a creamy sesame sauce.";
   return (
      <div> 
         <div>
            <h1>{title}</h1>
            <p>{description}</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   const recipeImage = "https://pinchofyum.com/wp-content/uploads/Tofu-Lettuce-Wraps-Recipe-183x183.jpg";
   return (
      <img src={recipeImage} alt={recipeImage} className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
