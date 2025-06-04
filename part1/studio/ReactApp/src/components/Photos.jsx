import styles from './Description.module.css';

function RecipePhoto(){
    return(
        <img
        src="https://pinchofyum.com/wp-content/uploads/2013/06/spaghetti-9.jpg"
        alt="Filipino Spaghetti"
        className={styles.imageUpdates}
      />
    );
}

export default RecipePhoto;