import { useSelector } from 'react-redux';
import classes from 'react';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
    const favorites = useSelector((state) => state.favorites);
    let content;
    if (favorites.length === 0) {
        content = <p>You dont have any favorites yet! Go and add some.</p>;
    } else {
        content = <MeetupList data={favorites.favorites} />;
    }

    return (
        <section>
            <h1>My Favorites</h1>
            <ul className={classes.list}>
                {content}
            </ul>
        </section>
    );
}

export default FavoritesPage;