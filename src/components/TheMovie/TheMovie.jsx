import { useDispatch } from "react-redux";
import classes from "../TheMovie/theMovie.module.css";
import favorite from "/favorite.png";

import { addToFavorites } from "../redux/actions";

const TheMovie = ({ selectedMovie }) => {
	const dispatch = useDispatch();

	const handleClickFavorite = () => {
		dispatch(
			addToFavorites({
				title: selectedMovie.title,
				id: selectedMovie.id,
				img: selectedMovie.poster_path,
				text: selectedMovie.overview
			})
		);
	};

	return (
		<div>
			{selectedMovie && (
				<div className={classes.wrapper}>
					<img
						src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}
						alt={selectedMovie.title}
						className={classes.movieImage}
					/>
					<h3>{selectedMovie.title}</h3>
					<p>{selectedMovie.overview}</p>
					<div
						onClick={handleClickFavorite}
						className={classes.favorite}
					>
						<img
							className={classes.image}
							src={favorite}
							alt="favorite"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default TheMovie;
