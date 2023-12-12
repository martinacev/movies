import classes from '../Header/header.module.css';
import star from '/star.png'
import favorite from '/public/favorite.png'

const Header = () => {


    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <img className={classes.image} src={star} alt='logo' />
            </div>
            <div>
            <input className={classes.input} type='text' />
            </div>
            <button className={classes.btn}>
                <img className={classes.favorite} src={favorite} alt='favorite' />
            </button>
        </div>
    )
}

export default Header;