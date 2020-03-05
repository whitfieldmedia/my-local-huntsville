import React from 'react';
import newsletter from './images/newsletter_march-1.png';
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
                                Muscadine Bloodline
                            </h2>
                            <p className="event-date">
                                Thursday March 5 at 7:30 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/muscadine-bloodline/3371313/?eventId=3371313&eventName=Muscadine+Bloodline&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=03%2f05%2f2020+19%3a30%3a00&city=Huntsville&stateProvince=AL&performerId=55364&performerName=Muscadine+Bloodline&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Tommy Emmanuel
                            </h2>
                            <p className="event-date">
                                Friday March 6 at 8 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/tommy-emmanuel/3365198/?eventId=3365198&eventName=Tommy+Emmanuel&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=03%2f06%2f2020+20%3a00%3a00&city=Huntsville&stateProvince=AL&performerId=11979&performerName=Tommy+Emmanuel&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Hew Tyler at The Boot Pizzeria
                            </h2>
                            <p className="event-date">
                                Saturday, March 7, 2020 at 6 PM – 9 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/The+Boot+Pizzeria/@34.6280551,-86.5687295,17z/data=!3m1!4b1!4m5!3m4!1s0x88620d5bbf285627:0x368dbec70ccff0c3!8m2!3d34.6280507!4d-86.5665408"
                                target="_blank"
                                rel="noopener noreferrer">
                                The Boot Pizzeria
                            </a>
                            <a className="event-link"
                                href="https://www.facebook.com/events/564927887685607/"
                                target="_blank"
                                rel="noopener noreferrer">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                S. Patrick’s cookies decorating
                            </h2>
                            <p className="event-date">
                                Wednesday, March 11, 2020 at 6 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/The+Boot+Pizzeria/@34.6280551,-86.5687295,17z/data=!3m1!4b1!4m5!3m4!1s0x88620d5bbf285627:0x368dbec70ccff0c3!8m2!3d34.6280507!4d-86.5665408"
                                target="_blank"
                                rel="noopener noreferrer">
                                The Boot Pizzeria
                            </a>
                            <a className="event-link"
                                href="https://www.facebook.com/events/573999253165211/"
                                target="_blank"
                                rel="noopener noreferrer">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                The Molly Ringwalds
                            </h2>
                            <p className="event-date">
                                Friday March 13 at 8 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/the-molly-ringwalds/3318629/?eventId=3318629&eventName=The+Molly+Ringwalds&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=03%2f13%2f2020+20%3a00%3a00&city=Huntsville&stateProvince=AL&performerId=16771&performerName=The+Molly+Ringwalds&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Chippendales (18+)
                            </h2>
                            <p className="event-date">
                                Sunday March 15 at 8 PM
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/chippendales-18-event/3318617/?eventId=3318617&eventName=Chippendales+(18%2b+Event)&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=03%2f15%2f2020+20%3a00%3a00&city=Huntsville&stateProvince=AL&performerId=5249&performerName=Chippendales&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>
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
                </div>
                <div className="newsletter-container">
                    <a className="newsletter-wrapper"
                        href="https://www.downtownhuntsville.org"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={newsletter} className="huntsville-newsletter" alt="Downtown Huntsville's Newsletter" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Events;
