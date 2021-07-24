import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function NewMeetsUpsPage() {
    const history = useHistory();
    function addMeetupHandler(meetup) {
        axios.post('https://react-getting-started-1b9e9-default-rtdb.firebaseio.com/meetups.json',
            { meetup }).then(() => {
                console.log('data is added')
                history.replace('/');
            });
    }

    return <section>
        <h1>New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>;
}

export default NewMeetsUpsPage;