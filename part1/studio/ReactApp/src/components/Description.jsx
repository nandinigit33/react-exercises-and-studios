import React from 'react';
import styles from './Description.module.css';

// RecipeAuthor Component
function RecipeAuthor(){
    const authorLink = 'https://pinchofyum.com/';// URL to the author's blog/social media
    const authorPhoto = 'https://pinchofyum.com/wp-content/assets/images/home-lindsay-kitchen.jpg'; // URL to the author's photo
    const authorName = 'Lind Say'; // Author's name

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Recipe Author" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Simple recipes made for
              everyday life</a> 
           </div>
        </div>
     );
}

// RecipeDescription Component
class RecipeDescription extends React.Component {
    render() {
      return (
        <div>
          <div>
            <h1>Filipino Spaghetti</h1>
            <p>This recipe is every kid’s favorite – Filipino Spaghetti – and comes from the orphanage that I worked at for a year in Cebu. Spaghetti, hot dogs, tomato sauce, and seasonings. So simple, so good.</p>
          </div>
          <RecipeAuthor />
        </div>
      );
    }
  }
  
export default RecipeDescription;