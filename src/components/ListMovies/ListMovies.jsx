import  { useState, useEffect } from 'react';
import CardMovie from '../CardMovie/cardMovie';
import TheMovie from '../TheMovie/TheMovie';
import classes from './listMovies.module.css';

export default function ListMovies({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {

  }, [selectedMovie]);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className={classes.wrapper}>
      <ul className={classes.container}>
        {movies.map((movie) => (
          <li key={movie.id} className={classes['movie-item']} onClick={() => handleCardClick(movie)}>
            <CardMovie
              title={movie.title}
              description={movie.overview}
              image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
          </li>
        ))}
      </ul>
      <TheMovie selectedMovie={selectedMovie} />
    </div>
  );
}
