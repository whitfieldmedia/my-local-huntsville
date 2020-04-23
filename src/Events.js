import React, { Suspense } from 'react';
import newsletter from './images/newsletter_april-4.png';
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
                                Chase Rice
                            </h2>
                            <p className="event-date">
                                Saturday April 11 at 8 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/chase-rice/3406674/?eventId=3406674&eventName=Chase+Rice&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=04%2f11%2f2020+20%3a00%3a00&city=Huntsville&stateProvince=AL&performerId=30802&performerName=Chase+Rice&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Theory of a Deadman
                            </h2>
                            <p className="event-date">
                                Monday April 13 at 8 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/theory-of-a-deadman/3360067/?eventId=3360067&eventName=Theory+of+a+Deadman&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=04%2f13%2f2020+20%3a00%3a00&city=Huntsville&stateProvince=AL&performerId=7059&performerName=Theory+of+a+Deadman&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Victor Wooten
                            </h2>
                            <p className="event-date">
                                Tuesday April 14 at 8 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/victor-wooten/3318632/?eventId=3318632&eventName=Victor+Wooten&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=04%2f14%2f2020+20%3a00%3a00&city=Huntsville&stateProvince=AL&performerId=7684&performerName=Victor+Wooten&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Huntsville Heart Walk
                            </h2>
                            <p className="event-date">
                                Saturday April 18, 8 AM - 11 AM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Madison+County+Courthouse/@34.7302349,-86.5874137,17z/data=!4m8!1m2!2m1!1scourthouse+square+huntsville+al!3m4!1s0x88626b5423ec2145:0x37ed8cc3ac352146!8m2!3d34.7301931!4d-86.5853818"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Courthouse Square, Downtown Huntsville 
                            </a>
                            <a className="event-link" href="https://www2.heart.org/site/TR;jsessionid=00000000.app325a?fr_id=4889&pg=entry&NONCE_TOKEN=D622385EC160B9ED218B5346B63814DA" target="_blank" rel="noopener noreferrer">
                                Register and/or donate
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                The Revivalists
                            </h2>
                            <p className="event-date">
                                Tuesday April 21 at 8 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/the-revivalists/3346132/?eventId=3346132&eventName=The+Revivalists&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=04%2f21%2f2020+20%3a00%3a00&city=Huntsville&stateProvince=AL&performerId=30653&performerName=The+Revivalists&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Clap for Classics
                            </h2>
                            <p className="event-date">
                                Saturday April 25, 10 AM - 11 AM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Huntsville+Botanical+Garden/@34.7075,-86.6362262,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c6e9ec1e7c5:0x9cecb08319fc29da!8m2!3d34.7074956!4d-86.6340375"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Huntsville Botanical Garden
                            </a>
                            <a className="event-link" href="https://hsvbg.org/event/clap-for-classics-8/2020-03-13/?fbclid=IwAR0rxvqip3O6127CseOcls5IQWDlDy8WyR_UGg_6zg-mcVe9K5On69DRuxc" target="_blank" rel="noopener noreferrer">
                                Event Details
                            </a>
                        </div>
                    </div>


                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Yoga at the Garden
                            </h2>
                            <p className="event-date">
                                Saturday April 25, 10 AM - 11 AM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Huntsville+Botanical+Garden/@34.7075,-86.6362262,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c6e9ec1e7c5:0x9cecb08319fc29da!8m2!3d34.7074956!4d-86.6340375"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Huntsville Botanical Garden
                            </a>
                            <a className="event-link" href="https://15236.blackbaudhosting.com/15236/EDA-Yoga-in-the-Garden-25Apr2020" target="_blank" rel="noopener noreferrer">
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
                                Saturday April 25, 1 PM - 4 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Huntsville+Botanical+Garden/@34.7075,-86.6362262,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c6e9ec1e7c5:0x9cecb08319fc29da!8m2!3d34.7074956!4d-86.6340375"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Huntsville Botanical Garden
                            </a>
                            <a className="event-link" href="https://15236.blackbaudhosting.com/15236/EDA-Plant-Invaders-Workshop-25Apr2020" target="_blank" rel="noopener noreferrer">
                                Register
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                The Best Alabama Beers, with OTBX
                            </h2>
                            <p className="event-date">
                                Saturday May 2, 2 PM - 4 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Chapman+Mountain+Preserve/@34.7744391,-86.5519472,17z/data=!3m1!4b1!4m5!3m4!1s0x886214e02a5c77b1:0xd4674e15c9c4ad17!8m2!3d34.7744347!4d-86.5497585"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Chapman Mountain Nature Preserve
                            </a>
                            <a className="event-link" href="https://www.facebook.com/events/207784100593927/" target="_blank" rel="noopener noreferrer">
                                Event Details
                            </a>
                        </div>
                    </div>
                    
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
