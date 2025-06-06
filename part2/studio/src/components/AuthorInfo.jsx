import React from 'react';
import recipe from './recipe.json';
//import styles.css
import './styling.css';


function AuthorInfo() {
  const recipeAuthor = <div key={recipe.author}>{recipe.author}</div>;

  const recipeAuthorImage = (<img  src={recipe.authorImage}
  alt={recipe.author}
  className="authorImage"
/>
);
const recipeWebsite = (
  <a href={recipe.website} target="_blank" rel="noopener noreferrer">
     {recipe.website}
  </a>
);
   return(
    <div>
       {recipeAuthorImage}
       {recipeAuthor}
       {recipeWebsite}
    </div>
 );
}

 //import json file for author info
 //image, name, website
 //css for styling image
 
 export default AuthorInfo;
 

