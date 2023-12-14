import classes from '../CardMovie/cardMovie.module.css';

export default function CardMovie({ title, description, image, selectedGenre }) {

	const maxChars = 80;

	const displayDescription = description.length > maxChars ? `${description.substring(0, maxChars)}...` : description;

	return (
		<div className={`${classes.wrapper} ${selectedGenre}`} >
			<img className={classes.avatar} src={image} />
			<div className={classes.informations}>
			<h4 className={classes.name}>{title}</h4>
			<p className={classes.text}>{displayDescription}</p>
			</div>
		</div>
	);
}
