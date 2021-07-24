import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupItem from '../components/meetups/MeetupItem';
import classes from 'react';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
    const favoritesContext = useContext(FavoritesContext);
    
    let content;

    if(favoritesContext.totalFavorites === 0) {
        content = <p>You dont have any favorites yet! Go and add some.</p>;
    } else {
        content = <MeetupList data={favoritesContext.favorites} />;
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