import React from 'react';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import './css/events.css';

class Events extends React.Component{
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="events-container">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> Upcoming Events in Huntsville Alabama </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/events"/>
                    <meta name="description" content="Stay in the loop and see upcoming events in Huntsville Alabama. There are lots of free events happening in Huntsville don't miss out." />
                </Helmet>
                <h1 className="event-header"> Upcoming Events </h1>
                <div className="events-page">
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title"> Halloween Costume Party with Dave Anderson! </h2>
                            <p className="event-date">
                                Tuesday, October 29, 2019
                                 <br/>
                            </p>
                            <p className="event-info"> 
                                Come preview your Halloween get up with our two favorite Dave's... Dave Anderson will be playing Live and our own David Dufour entertaining you from behind the Bar. Prizes for best costumes, a Spooktacular time will be had by ALL!
                                <br/>
                                <a className="event-link" href="https://www.facebook.com/events/2314572682002047/permalink/2314572688668713" target="_blank" rel="noopener noreferrer">
                                    Learn More >
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events;    