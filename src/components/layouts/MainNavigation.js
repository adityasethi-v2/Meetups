import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import { useSelector } from "react-redux";

function MainNavigation() {
    const favorites = useSelector((state) => state.favorites);

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
                            <span className={classes.badge}>{favorites.favorites.length}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;