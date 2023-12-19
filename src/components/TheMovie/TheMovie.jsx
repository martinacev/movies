import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions';
import classes from '../TheMovie/theMovie.module.css';
import favorite from '/favorite.png';

const TheMovie = ({ selectedMovie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  
  const isFavorite = favorites.some((movie) => movie === selectedMovie);

  const handleClickFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(selectedMovie));
    } else {
      dispatch(
        addToFavorites({
          title: selectedMovie.title,
          id: selectedMovie.id,
          img: selectedMovie.poster_path,
          text: selectedMovie.overview,
        })
      );
    }
  };

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
           <button
            onClick={handleClickFavorite}
            className={`${classes.favorite} ${isFavorite ? classes.favoriteActive : ''}`}
          >
            <img className={classes.image} src={favorite} alt="favorite" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TheMovie;
