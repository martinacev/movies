import { useState, useEffect } from "react";
import classes from "./genresList.module.css";

const GenresList = ({ setMovies }) => {
	const [data, setData] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState(null);

	const API_KEY = import.meta.env.VITE_API_KEY;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const options = {
					method: "GET",
					headers: {
						accept: "application/json",
					},
				};

				const response = await fetch(
					`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${API_KEY}`,
					options
				);
				const result = await response.json();
				setData(result.genres);
			} catch (error) {
				console.error("Error fetching genres:", error);
			}
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleGenreClick = (genreId) => {
		setSelectedGenre(genreId);
	};

	useEffect(() => {
		if (selectedGenre) {
			const fetchMoviesByGenre = async () => {
				try {
					const options = {
						method: "GET",
						headers: {
							accept: "application/json",
						},
					};

					const response = await fetch(
						`https://api.themoviedb.org/3/discover/movie?with_genres=${selectedGenre}&language=en&api_key=${API_KEY}`,
						options
					);
					const result = await response.json();
					setMovies(result.results);
				} catch (error) {
					console.error(
						`Error fetching movies for genre ${selectedGenre}:`,
						error
					);
				}
			};
			fetchMoviesByGenre();
		}
	}, [API_KEY, selectedGenre, setMovies]);

	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<h1 className={`${classes.color} ${classes.title}`}>
					Movie Genres
				</h1>
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
		</div>
	);
};

export default GenresList;
