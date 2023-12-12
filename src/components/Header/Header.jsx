
import classes from '../Header/header.module.css';
import star from '/star.png'

const Header = () => {


    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <img className={classes.image} src={star} alt='logo' />
            </div>
            <div>
            <input className={classes.input} type='text' />
            </div>
            <div className={classes.favorite}>favorite</div>
        </div>
    )
}

export default Header;