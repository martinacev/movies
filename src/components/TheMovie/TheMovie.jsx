import classes from '../TheMovie/theMovie.module.css';
import favorite from '../../../public/favorite.png';

const TheMovie = ({ selectedMovie }) => {
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
          <div className={classes.favorite}>
            <img src={favorite} alt="favorite" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TheMovie;