import { useState, useEffect } from "react";
import CardMovie from '../CardMovie/CardMovie';
import classes from './genresList.module.css';

const GenresList = () => {
  const [data, setData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzIyNWJmYzA5N2Y5MDRhZWY1MWZkNGQ3NjBjZjZkMyIsInN1YiI6IjY1NzFjOTViODg2MzQ4MDBhZDgxOWE0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jch6gbX8quGbAydz1qrxrC3t_hTNA76_itGkKfd_W6g'
          }
        };

        const response = await fetch(
          'https://api.themoviedb.org/3/genre/movie/list?language=en',
          options
        );
        const result = await response.json();
        setData(result.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchData();
  }, []);

  const fetchMoviesByGenre = async (genreId) => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzIyNWJmYzA5N2Y5MDRhZWY1MWZkNGQ3NjBjZjZkMyIsInN1YiI6IjY1NzFjOTViODg2MzQ4MDBhZDgxOWE0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jch6gbX8quGbAydz1qrxrC3t_hTNA76_itGkKfd_W6g'
        }
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en`,
        options
      );
      const result = await response.json();
      setMovies(result.results);
    } catch (error) {
      console.error(`Error fetching movies for genre ${genreId}:`, error);
    }
  };

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
    fetchMoviesByGenre(genreId);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1 className={`${classes.color} ${classes.title}`}>Movie Genres</h1>
        <ul className={classes.lists}>
          {data.map((genre) => (
            <li
              className={`${classes.color} ${classes.items}`}
              key={genre.id}
              onClick={() => handleGenreClick(genre.id)}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedGenre && (
        <div>
          <h2>Movies in {data.find(title => title.id === selectedGenre)?.name} genre</h2>
          <div className={classes.movieList}>
            {movies.map((movie) => (
              <CardMovie
                selectedGenre={selectedGenre}
                key={movie.id}
                title={movie.title}
                description={movie.overview}
                image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenresList;