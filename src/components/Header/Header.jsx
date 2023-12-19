import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from '../Header/header.module.css';
import star from '/star.png';
import favorite from '/favorite.png';

const Header = ({ setSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;
      
        if (searchQuery.trim() === '') {
          return;
        }
  
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        };
  
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&api_key=${API_KEY}&query=${searchQuery}`,
          options
        );
        const data = await response.json();
        setSearch(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [searchQuery, setSearch]);
  const handleFavoritesClick = () => {
    navigate('/favorites');
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img className={classes.image} src={star} alt="logo" />
      </div>
      <div>
        <input
          className={classes.input}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search movies..."
        />
      </div>
      <button className={classes.btn} onClick={handleFavoritesClick}>
        <img className={classes.favorite} src={favorite} alt="favorite" />
        {favorites.length > 0 && (
          <span className={classes.favoriteCount}>{favorites.length}</span>
        )}
      </button>
    </div>
  );
};

export default Header;