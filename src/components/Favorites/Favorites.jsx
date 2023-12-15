
import { useNavigate } from 'react-router-dom';
import classes from '../Favorites/favorites.module.css';

const Favorites = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  }; 

    return (
        <div className={classes.container}>
          <h2>Your Favorite Movies</h2>
          <button onClick={handleBackClick}>Back</button>
        </div>
    )
}

export default Favorites;