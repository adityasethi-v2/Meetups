import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from 'react';
import axios from 'axios';

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [meetupData, setMeetupData] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://react-getting-started-1b9e9-default-rtdb.firebaseio.com/meetups.json')
            .then((data) => {
                const meetups = [];
                const dataMeetups = data.data;
                console.log(data);
                for (const key in dataMeetups) {
                    const meetup = {
                        id: key,
                        ...dataMeetups[key].meetup
                    };

                    meetups.push(meetup)
                }

                setIsLoading(false);
                setMeetupData(meetups)
            })
    }, [])

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList data={meetupData} />
        </section>
    );
}

export default AllMeetupsPage;