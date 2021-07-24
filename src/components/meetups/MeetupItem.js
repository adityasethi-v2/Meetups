import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoriteContext from '../../store/favorites-context'
import { useContext } from 'react'

function MeetupItem(props) {
    const favoriteContext = useContext(FavoriteContext);

    const itemIsFavorite = favoriteContext.itemIsFavorite(props.meetup.id);

    function togglerFavoriteStausHandler() {
        if(itemIsFavorite) {
            favoriteContext.removeFavorite(props.meetup.id)
        } else {
            favoriteContext.addFavorite(props.meetup)
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.meetup.image} alt={props.meetup.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.meetup.title}</h3>
                    <address>{props.meetup.address}</address>
                    <p>{props.meetup.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={togglerFavoriteStausHandler}>
                        {itemIsFavorite ? 'Remove from favorites' : 'To Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;