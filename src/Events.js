import React, { Suspense } from 'react';
import newsletter from './images/newsletter_may-2.png';
import { Helmet } from 'react-helmet';
import './css/events.css';

class Events extends React.Component{
    constructor() {
        super();
        this.state = {
            numPages: 18,
            pageNumber: 1
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        return (
            <div className="events-container">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>
                        Upcoming Events in Huntsville | My Local Huntsville
                    </title>
                    <link rel="canonical"
                        href="https://www.mylocalhuntsville.com/events"/>
                    <meta name="description"
                        content="Stay in the loop and see upcoming events in Huntsville Alabama. There are lots of free events happening in Huntsville don't miss out." />
                </Helmet>
                <h1 className="event-header"> Upcoming Events </h1>
                <div className="events-page">
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Plant Invaders Workshop
                            </h2>
                            <p className="event-date">
                                Saturday May 30, 1 PM - 4 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Huntsville+Botanical+Garden/@34.7075,-86.6362262,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c6e9ec1e7c5:0x9cecb08319fc29da!8m2!3d34.7074956!4d-86.6340375"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Huntsville Botanical Garden
                            </a>
                            <a className="event-link" href="https://15236.blackbaudhosting.com/15236/EDA-Plant-Invaders-Workshop-30May2020" target="_blank" rel="noopener noreferrer">
                                Register
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Plant Invaders Workshop
                            </h2>
                            <p className="event-date">
                                Saturday Jun 13, 1 PM - 4 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Huntsville+Botanical+Garden/@34.7075,-86.6362262,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c6e9ec1e7c5:0x9cecb08319fc29da!8m2!3d34.7074956!4d-86.6340375"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Huntsville Botanical Garden
                            </a>
                            <a className="event-link" href="https://15236.blackbaudhosting.com/15236/EDA-Plant-Invaders-Workshop" target="_blank" rel="noopener noreferrer">
                                Register
                            </a>
                        </div>
                    </div>
                </div>
                <div className="newsletter-container">
                    <a className="newsletter-wrapper"
                        href="https://www.downtownhuntsville.org"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Suspense fallback={<div> Loading... </div> }>
                            <img src={newsletter} className="huntsville-newsletter" alt="Downtown Huntsville's Newsletter" />
                        </Suspense>
                    </a>
                </div>
            </div>
        )
    }
}

export default Events;
