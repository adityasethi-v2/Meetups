import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite, addFavorite, isFavorite } from '../../redux/actions/Favorites';

function MeetupItem(props) {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites )
    const itemIsFavorite = favorites.favorites.some((meetup) => meetup.id === props.meetup.id);
    function togglerFavoriteStatusHandler() {
        if (itemIsFavorite) {
            dispatch(removeFavorite(props.meetup.id));
        } else {
            dispatch(addFavorite(props.meetup));
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
                    <button onClick={togglerFavoriteStatusHandler}>
                        {itemIsFavorite ? 'Remove from favorites' : 'To Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;