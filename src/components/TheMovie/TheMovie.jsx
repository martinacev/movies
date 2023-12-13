import classes from '../TheMovie/theMovie.module.css';
import favorite from '../../../public/favorite.png';
import { useState } from 'react';

const TheMovie = ({ selectedMovie }) => {
   const [isFavoriteClicked, setIsFavoriteClicked] = useState(false);

   const handleClickFavorite = () => {
    setIsFavoriteClicked(!isFavoriteClicked);
   }

   
  return (
    <div>
      {selectedMovie && (
        <div className={classes.wrapper}>
            <img
              src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              className={classes.movieImage}
            />
          <h3>{selectedMovie.title}</h3>
          <p>{selectedMovie.overview}</p>
          <div onClick={handleClickFavorite} className={`${classes.favorite} ${isFavoriteClicked ? classes.favoriteClicked : ''}`}>
            <img src={favorite} alt="favorite" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TheMovie;