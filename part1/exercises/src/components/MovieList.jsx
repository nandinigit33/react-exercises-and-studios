import React from 'react';
import classes from './MovieList.module.css';

class MovieList extends React.Component {
   render() {
      const movies = ["Pride and Prejudice", "Howl's Moving Castle", "Legally Blonde", "Star Wars"];
      return (
      <div>
         <h3 className = {classes.movieHeading}>Movies I Watched This Month</h3>
         <ol>
            <li className={classes.movieText}>{movies[0]}</li>
            <li className={classes.movieText}>{movies[1]}</li>
         </ol>
         
      </div>
      );
   }
}

export default MovieList;

// If you want to make this more dynamic and scalable, you can use .map() instead of writing each <li> manually:

// <ol>
//   {movies.map((movie, index) => (
//     <li key={index} className={classes.movieText}>{movie}</li>
//   ))}
// </ol>