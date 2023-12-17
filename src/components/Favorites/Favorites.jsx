import { useNavigate } from "react-router-dom";
import classes from "../Favorites/favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../redux/actions";

const Favorites = () => {
	const favoriteMovies = useSelector((state) => state.favorites);
	const dispatch = useDispatch();

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

	const handleRemoveClick = (movieId) => {
		dispatch(removeFromFavorites(movieId));
	};

	return (
		<div className={classes.container}>
			<div className={classes.title}>
				<div className={classes.btn} onClick={handleBackClick}>
				↩ 
				</div>
				<h2>Your Favorite Movies</h2>
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
							<div
								onClick={() => handleRemoveClick(movie.id)}
								className={classes.remove}
							>
								❌
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Favorites;
