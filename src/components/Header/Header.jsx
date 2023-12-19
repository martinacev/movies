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