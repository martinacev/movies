import { useNavigate } from 'react-router-dom';
import classes from '../Header/header.module.css';
import star from '/star.png';
import favorite from '/favorite.png';

const Header = () => {
  const navigate = useNavigate();

  const handleFavoritesClick = () => {
    navigate('/favorites');
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img className={classes.image} src={star} alt='logo' />
      </div>
      <div>
        <input className={classes.input} type='text' />
      </div>
      <button className={classes.btn} onClick={handleFavoritesClick}>
        <img className={classes.favorite} src={favorite} alt='favorite' />
      </button>
    </div>
  );
};

export default Header;