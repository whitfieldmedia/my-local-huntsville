import React from 'react';
import newsletter from './images/huntsville_newsletter1.png';
import newsletter2 from './images/huntsville_newsletter2.png';
import newsletter3 from './images/huntsville_newsletter3.png';
import newsletter4 from './images/huntsville_newsletter4.png';
import newsletter5 from './images/huntsville_newsletter5.png';
import newsletter6 from './images/huntsville_newsletter6.png';
import newsletter7 from './images/huntsville_newsletter7.png';
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
                            <h2 className="event-title"> Botanical Gardens - Galaxy Of Lights </h2>
                            <p className="event-date">
                                Walking Nights November 15-18 & 21-26 5:30 - 8:00 p.m.
                            </p>
                            <p className="event-date">
                                Driving Nights November 29 - January 4* 5:30 - 9:00 p.m.
                            </p>
                            <a className="event-link" href="http://hsvbg.org/galaxy/" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                            <iframe className="event-video" title="Botanical Gardens - Galaxy of Lights" src="https://player.vimeo.com/video/374181200" width="640" height="480" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                        </div>  
                    </div>
                    {/* <div className="event-holder">
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
                    </div> */}
                </div>
                <div className="newsletter-container">
                    <a className="newsletter-wrapper" href="https://www.downtownhuntsville.org" target="_blank" rel="noopener noreferrer">
                        <img src={newsletter} className="huntsville-newsletter" alt="Downtown Huntsville's Newsletter" />
                        <img src={newsletter2} className="huntsville-newsletter" alt="Downtown Huntsville's Newsletter"/>
                        <img src={newsletter3} className="huntsville-newsletter" alt="Downtown Huntsville's Newsletter"/>
                        <img src={newsletter4} className="huntsville-newsletter" alt="Downtown Huntsville's Newsletter"/>
                        <img src={newsletter5} className="huntsville-newsletter" alt="Downtown Huntsville's Newsletter"/>
                        <img src={newsletter6} className="huntsville-newsletter" alt="Downtown Huntsville's Newsletter"/>
                        <img src={newsletter7} className="huntsville-newsletter" alt="Downtown Huntsville's Newsletter"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Events;    