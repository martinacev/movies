import { useNavigate } from "react-router-dom";
import classes from "../Favorites/favorites.module.css";
import { useSelector } from "react-redux";

const Favorites = () => {
	const favoriteMovies = useSelector((state) => state.favorites);

	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate("/");
	};

	return (
		<div className={classes.container}>
			<h2>Your Favorite Movies</h2>
			<button onClick={handleBackClick}>Back</button>
			<ul>
				{favoriteMovies.map((movie, index) => (
					<li key={`${movie.id}-${index}`}>{movie.title}</li>
				))}
			</ul>
		</div>
	);
};

export default Favorites;
