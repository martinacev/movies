import CardMovie from "../CardMovie/CardMovie";
import classes from "./listMovies.module.css";

export default function ListMovies({ movies }) {
	return (
		<ul className={classes.container}>
			{movies.map((movie) => {
				return (
					<li key={movie.id} className={classes["movie-item"]}>
						<CardMovie
							title={movie.title}
							description={movie.overview}
							image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
						/>
					</li>
				);
			})}
		</ul>
	);
}
