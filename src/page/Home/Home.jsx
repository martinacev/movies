import { useEffect, useState } from "react";
import ListMovies from "../../components/ListMovies/ListMovies";
import classes from "./home.module.css";
import Spinner from "../../components/Spinner/Spinner";

export default function HomePage() {
	const API_KEY = import.meta.env.VITE_API_KEY;
	const [data, setData] = useState([]);
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		setIsloading(true);
		const fetchData = async () => {
			await fetch(
				`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
			)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					setData(data.results);
					setIsloading(false);
				});
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className={classes.container}>
			<ListMovies movies={data} />
		</div>
	);
}
