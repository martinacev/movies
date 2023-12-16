import { useNavigate } from "react-router-dom";
import classes from "../Favorites/favorites.module.css";
import { useSelector } from "react-redux";

const Favorites = () => {
	const favoriteMovies = useSelector((state) => state.favorites);

	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate("/");
	};

	const truncateText = (text, maxLength) => {
		if (text.length <= maxLength) {
			return text;
		} else {
			return text.substring(0, maxLength) + "...";
		}
	};

	return (
		<div className={classes.container}>
			<div className={classes.title}>
				<h2>Your Favorite Movies</h2>
				<button className={classes.btn} onClick={handleBackClick}>
					Back
				</button>
			</div>
			<ul className={classes.wrapper}>
				{favoriteMovies.map((movie, index) => (
					<li className={classes.card} key={`${movie.id}-${index}`}>
						<img
							src={`https://image.tmdb.org/t/p/original/${movie.img}`}
							className={classes.movieImage}
						/>
						<div className={classes.informations}>
							<h3>{movie.title}</h3>
							<p>{truncateText(movie.text, 150)}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Favorites;
