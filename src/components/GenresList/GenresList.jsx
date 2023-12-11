import  { useState, useEffect } from "react";
import classes from './genresList.module.css'

const GenresList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzIyNWJmYzA5N2Y5MDRhZWY1MWZkNGQ3NjBjZjZkMyIsInN1YiI6IjY1NzFjOTViODg2MzQ4MDBhZDgxOWE0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jch6gbX8quGbAydz1qrxrC3t_hTNA76_itGkKfd_W6g'
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

  return (
    <div className={classes.container}>
    <div className={classes.wrapper}>
      <h1 className={`${classes.color} ${classes.title}`}>Movie Genres</h1>
      <ul className={classes.lists}>
        {data.map((genre) => (
          <li className={`${classes.color} ${classes.items}`} key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default GenresList;