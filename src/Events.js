import React, { Suspense } from 'react';
import newsletter from './images/newsletter_march-3.png';
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
                                Black Label Society
                            </h2>
                            <p className="event-date">
                                Thursday March 19 at 7:30 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/black-label-society/3369005/?eventId=3369005&eventName=Black+Label+Society&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=03%2f19%2f2020+19%3a30%3a00&city=Huntsville&stateProvince=AL&performerId=6492&performerName=Black+Label+Society&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Adult Spelling Bee
                            </h2>
                            <p className="event-date">
                                Thursday March 19, 6 PM - 9 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Yellowhammer+Brewing/@34.7217513,-86.6076011,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c9edcc1c00b:0x4ed1363995ffc657!8m2!3d34.7217469!4d-86.6054124"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Yellowhammer Brewing
                            </a>
                            <a className="event-link" href="https://www.facebook.com/events/483985782276768/" target="_blank" rel="noopener noreferrer">
                                Event Details
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Band of Horsed
                            </h2>
                            <p className="event-date">
                                Friday March 20 at 8 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/band-of-horses/3405278/?eventId=3405278&eventName=Band+of+Horses&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=03%2f20%2f2020+20%3a00%3a00&city=Huntsville&stateProvince=AL&performerId=9287&performerName=Band+of+Horses&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Live Music with Ally Free
                            </h2>
                            <p className="event-date">
                                Friday March 20, 7 PM - 10 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/The+Brass+Tap/@34.710398,-86.591248,17z/data=!4m5!3m4!1s0x88626d8425d326c1:0x13b41e2e27b67db8!8m2!3d34.7103936!4d-86.5890593"
                                target="_blank"
                                rel="noopener noreferrer">
                                    The Brass Tap
                            </a>
                            <a className="event-link" href="https://www.facebook.com/events/1471800452985605/" target="_blank" rel="noopener noreferrer">
                                Event Details
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Seeds?
                            </h2>
                            <p className="event-date">
                                Friday March 20 at 10 PM 
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/The+Bar+at+805/@34.7222006,-86.6068994,17z/data=!3m1!4b1!4m5!3m4!1s0x88626d55a1723b81:0x7af4f926062fc092!8m2!3d34.7221962!4d-86.6047107"
                                target="_blank"
                                rel="noopener noreferrer">
                                    The Bar at 805
                            </a>
                            <a className="event-link" href="https://www.facebook.com/events/199554011480559/" target="_blank" rel="noopener noreferrer">
                                Event Details
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Clap for Classics
                            </h2>
                            <p className="event-date">
                                Saturday March 21, 10 AM - 11 AM
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
                                Plant Invaders Workshop
                            </h2>
                            <p className="event-date">
                                Saturday March 21, 1 PM - 4 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Huntsville+Botanical+Garden/@34.7075,-86.6362262,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c6e9ec1e7c5:0x9cecb08319fc29da!8m2!3d34.7074956!4d-86.6340375"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Huntsville Botanical Garden
                            </a>
                            <a className="event-link" href="https://15236.blackbaudhosting.com/15236/EDA-Plant-Invaders-Workshop-21Mar2020" target="_blank" rel="noopener noreferrer">
                                Register
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Connect to Your Coast
                            </h2>
                            <p className="event-date">
                                Saturday March 21, 12 PM - 10 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Yellowhammer+Brewing/@34.7217513,-86.6076011,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c9edcc1c00b:0x4ed1363995ffc657!8m2!3d34.7217469!4d-86.6054124"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Yellowhammer Brewing
                            </a>
                            <a className="event-link" href="https://www.facebook.com/events/880339432422300/" target="_blank" rel="noopener noreferrer">
                                Event Details
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Dr. Whateva
                            </h2>
                            <p className="event-date">
                                Saturday March 21 at 10 PM 
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/The+Bar+at+805/@34.7222006,-86.6068994,17z/data=!3m1!4b1!4m5!3m4!1s0x88626d55a1723b81:0x7af4f926062fc092!8m2!3d34.7221962!4d-86.6047107"
                                target="_blank"
                                rel="noopener noreferrer">
                                    The Bar at 805
                            </a>
                            <a className="event-link" href="https://www.facebook.com/events/192179765456087/" target="_blank" rel="noopener noreferrer">
                                Event Details
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Graham Nash
                            </h2>
                            <p className="event-date">
                                Wednesday March 25 at 8 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/graham-nash/3318620/?eventId=3318620&eventName=Graham+Nash&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=03%2f25%2f2020+20%3a00%3a00&city=Huntsville&stateProvince=AL&performerId=3417&performerName=Graham+Nash&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Monty Python Knnnight
                            </h2>
                            <p className="event-date">
                                Wednesday March 25, 6 PM - 11:30 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/The+Poppy/@34.7309516,-86.5875432,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b70ee875f43:0x3f65e406105e0940!8m2!3d34.7309472!4d-86.5853545"
                                target="_blank"
                                rel="noopener noreferrer">
                                    The Poppy
                            </a>
                            <a className="event-link" href="https://www.facebook.com/events/628271854627908/" target="_blank" rel="noopener noreferrer">
                                Event Details
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Gemini Bourbon Re-Release
                            </h2>
                            <p className="event-date">
                                Thursday March 26, 5 PM - 9 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Yellowhammer+Brewing/@34.7217513,-86.6076011,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c9edcc1c00b:0x4ed1363995ffc657!8m2!3d34.7217469!4d-86.6054124"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Yellowhammer Brewing
                            </a>
                            <a className="event-link" href="https://www.facebook.com/events/2623380981233223/" target="_blank" rel="noopener noreferrer">
                                Event Details
                            </a>
                        </div>
                    </div>
                    
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Ashley McBryde
                            </h2>
                            <p className="event-date">
                                Friday March 27 at 7:30 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/ashley-mcbryde/3360123/?eventId=3360123&eventName=Ashley+McBryde&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=03%2f27%2f2020+19%3a30%3a00&city=Huntsville&stateProvince=AL&performerId=62881&performerName=Ashley+McBryde&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Jo Dee Messina
                            </h2>
                            <p className="event-date">
                                Saturday March 28 at 7:30 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/jo-dee-messina/3318623/?eventId=3318623&eventName=Jo+Dee+Messina&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=03%2f28%2f2020+19%3a30%3a00&city=Huntsville&stateProvince=AL&performerId=406&performerName=Jo+Dee+Messina&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Yoga at the Garden
                            </h2>
                            <p className="event-date">
                                Saturday March 28, 10 AM - 11 AM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Huntsville+Botanical+Garden/@34.7075,-86.6362262,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c6e9ec1e7c5:0x9cecb08319fc29da!8m2!3d34.7074956!4d-86.6340375"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Huntsville Botanical Garden
                            </a>
                            <a className="event-link" href="https://15236.blackbaudhosting.com/15236/EDA-Yoga-in-the-Garden-28Mar2020" target="_blank" rel="noopener noreferrer">
                                Register
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Veterans United 5th Annual Chili Cook Off
                            </h2>
                            <p className="event-date">
                                Saturday March 28, 11 AM - 2 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Yellowhammer+Brewing/@34.7217513,-86.6076011,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c9edcc1c00b:0x4ed1363995ffc657!8m2!3d34.7217469!4d-86.6054124"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Yellowhammer Brewing
                            </a>
                            <a className="event-link" href="https://www.facebook.com/events/500608020850328/" target="_blank" rel="noopener noreferrer">
                                Event Details
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                5ive O’clock Charlie
                            </h2>
                            <p className="event-date">
                                Saturday March 28 at 10 PM 
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/The+Bar+at+805/@34.7222006,-86.6068994,17z/data=!3m1!4b1!4m5!3m4!1s0x88626d55a1723b81:0x7af4f926062fc092!8m2!3d34.7221962!4d-86.6047107"
                                target="_blank"
                                rel="noopener noreferrer">
                                    The Bar at 805
                            </a>
                            <a className="event-link" href="https://www.facebook.com/events/638393873615424/" target="_blank" rel="noopener noreferrer">
                                Event Details
                            </a>
                        </div>
                    </div>

                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                ZimSculpt | A world-renowned display of Zimbabwean sculptures
                            </h2>
                            <p className="event-date">
                                April 3 - May 24
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Huntsville+Botanical+Garden/@34.7075,-86.6362262,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c6e9ec1e7c5:0x9cecb08319fc29da!8m2!3d34.7074956!4d-86.6340375"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Huntsville Botanical Garden
                            </a>
                            <a className="event-link" href="https://hsvbg.org/zimsculpt/?fbclid=IwAR0enlxBmhswALAH0oF1jly6zLYjw_rA7g2Gmk0hU7VYH8GDgnlT3r38JjI" target="_blank" rel="noopener noreferrer">
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
                                Saturday April 4, 10 AM - 11 AM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Huntsville+Botanical+Garden/@34.7075,-86.6362262,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c6e9ec1e7c5:0x9cecb08319fc29da!8m2!3d34.7074956!4d-86.6340375"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Huntsville Botanical Garden
                            </a>
                            <a className="event-link" href="https://15236.blackbaudhosting.com/15236/EDA-Yoga-in-the-Garden-04Apr2020" target="_blank" rel="noopener noreferrer">
                                Register
                            </a>
                        </div>
                    </div>

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
