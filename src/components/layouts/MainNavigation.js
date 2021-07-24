import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context";
import { useContext } from "react";

function MainNavigation() {
    const totalFavorites = useContext(FavoritesContext);


    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to='/'>All Meetups</Link></li>
                    <li><Link to='/newmeetups'>Add New Meetup</Link></li>
                    <li>
                        <Link to='/favorites'>
                            Favorites
                            <span className={classes.badge}>{totalFavorites.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;