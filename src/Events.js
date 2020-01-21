import React from 'react';
import newsletter from './images/newsletter_1-3.png';
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
                                    Live Music
                                </h2>
                                <p className="event-date"> 
                                Friday January 24, 2020 at 6 PM
                                </p>
                                <p className="event-date">
                                    <strong>
                                        The Boot Pizzeria
                                    </strong> <br/>
                                    11505 S Memorial Pkwy, Huntsville, Alabama 35803
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/495557954429159/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="event-holder"> 
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Yoga at the Garden
                                </h2>
                                <p className="event-date"> 
                                    Sunday, January 26, 2020 at 2:00 PM - 3:00 PM
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Huntsville Botanical Garden
                                    </strong> <br/>
                                    4747 Bob Wallace Ave SW, Huntsville, Alabama 35805
                                </p>
                                <a className="event-link"
                                    href="https://www.facebook.com/events/739216676573552/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="event-holder"> 
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Advanced Pistol 2
                                </h2>
                                <p className="event-date"> 
                                    Tuesday, January 28, 2020 at 5:30 PM – 8:30 PM
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Bullet and Barrel
                                    </strong> <br/>
                                    3252 Leeman Ferry Rd, Huntsville, Alabama 35801
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/540753683145618/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="event-holder">
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Marvel Universe Trivia
                                </h2>
                                <p className="event-date">
                                    Monday, February 3, 2020 at 6 PM – 7:30 PM
                                    <br/>
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Old Town Beer Exchange
                                    </strong> <br/>
                                    301 Holmes Ave NE, Ste 150, Huntsville, Alabama 35801
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/2292796704351606/" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    Learn More 
                                </a>
                            </div>
                        </div>
                        <div className="event-holder"> 
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Valentine cookies decorating
                                </h2>
                                <p className="event-date"> 
                                    Wednesday, February 5, 2020 at 6 PM
                                </p>
                                <p className="event-date">
                                    <strong>
                                    The Boot Pizzeria 
                                    </strong> <br/>
                                    11505 S Memorial Pkwy, Huntsville, Alabama 35803
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/558016738084818/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="event-holder">
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Concealed Carry Range
                                </h2>
                                <p className="event-date">
                                    Friday, February 7, 2020 at 5:30 PM – 9:30 PM
                                    <br/>
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Bullet and Barrel
                                    </strong> <br/>
                                    3252 Leeman Ferry Rd, Huntsville, Alabama 35801
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/111763333542259/" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    Learn More 
                                </a>
                            </div>
                        </div>
                        <div className="event-holder"> 
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Wine in the Winter
                                </h2>
                                <p className="event-date"> 
                                    Friday, February 7, 2020 at 6:30 PM – 8:30 PM
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Huntsville Botanical Garden
                                    </strong> <br/>
                                    4747 Bob Wallace Ave SW, Huntsville, Alabama 35805
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/548461779341843/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="event-holder"> 
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    How to Prune Your Trees
                                </h2>
                                <p className="event-date"> 
                                    Saturday, February 8 at 2:00 PM - 4:00 PM
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Huntsville Botanical Garden
                                    </strong> <br/>
                                    4747 Bob Wallace Ave SW, Huntsville, Alabama 35805
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/563249747573368/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="event-holder"> 
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    2020 Von Brewski Beer Festival
                                </h2>
                                <p className="event-date"> 
                                    Saturday, February 8, at 1 PM - 5 PM 
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Von Braun Center
                                    </strong> <br/>
                                    700 Monroe St SW, Huntsville, Alabama 35801
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/1725667437569295/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="event-holder">
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Personal Safety & Defense
                                </h2>
                                <p className="event-date">
                                    Sunday, February 9, 2020 at 2 PM – 5 PM
                                    <br/>
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Bullet and Barrel
                                    </strong> <br/>
                                    3252 Leeman Ferry Rd, Huntsville, Alabama 35801
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/1209225349466704/" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    Learn More 
                                </a>
                            </div>
                        </div>
                        <div className="event-holder"> 
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Wine and Cheese, Please!
                                </h2>
                                <p className="event-date"> 
                                    Monday, February 10, 2020 at 5:30 PM – 7:30 PM
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Old Town Beer Exchange
                                    </strong> <br/>
                                    301 Holmes Ave NE, Ste 150, Huntsville, Alabama 35801
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/896868157331476/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="event-holder">
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Down Range - Slice the Pie & 21 foot rule
                                </h2>
                                <p className="event-date">
                                    Wednesday, February 12, 2020 at 5:30 PM – 6:30 PM
                                    <br/>
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Bullet and Barrel
                                    </strong> <br/>
                                    3252 Leeman Ferry Rd, Huntsville, Alabama 35801
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/2203518053276500/" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    Learn More 
                                </a>
                            </div>
                        </div>
                        <div className="event-holder">
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Ham Radio Technicians Course
                                </h2>
                                <p className="event-date">
                                    Saturday, February 15, 2020 at 1 PM – 5 PM
                                    <br/>
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Bullet and Barrel
                                    </strong> <br/>
                                    3252 Leeman Ferry Rd, Huntsville, Alabama 35801
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/182678042931691/" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    Learn More 
                                </a>
                            </div>
                        </div>
                        <div className="event-holder"> 
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Ladies - Concealed Carry Range
                                </h2>
                                <p className="event-date"> 
                                    Sunday, February 16, 2020 at 5:30 PM – 9:30 PM
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Bullet and Barrel
                                    </strong> <br/>
                                    3252 Leeman Ferry Rd, Huntsville, Alabama 35801
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/1275070999361037/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="event-holder"> 
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Weapons Disarming
                                </h2>
                                <p className="event-date"> 
                                    Tuesday, February 18 at 5:30 PM - 6:30 PM
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Bullet and Barrel
                                    </strong> <br/>
                                    3252 Leeman Ferry Rd, Huntsville, Alabama 35801
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/185939229185257/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="event-holder">
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Force on Force Training
                                </h2>
                                <p className="event-date">
                                    Saturday, February 22, 2020 at 2 PM – 5 PM
                                    <br/>
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Bullet and Barrel
                                    </strong> <br/>
                                    3252 Leeman Ferry Rd, Huntsville, Alabama 35801
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/1285347728522279/" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    Learn More 
                                </a>
                            </div>
                        </div>
                        <div className="event-holder"> 
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Beaks and Barks
                                </h2>
                                <p className="event-date"> 
                                    Daily, until February 29 at 9 AM - 5 PM
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Huntsville Botanical Garden
                                    </strong> <br/>
                                    4747 Bob Wallace Ave SW, Huntsville, Alabama 35805
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/592601271501661/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Learn More
                                </a>
                            </div>
                        </div>

                        <div className="event-holder"> 
                            <div className="event-container">
                                <h2 className="event-title"> 
                                    Downtown Tri
                                </h2>
                                <p className="event-date"> 
                                    Sunday, March 1, 2020 at 1 PM – 4 PM
                                </p>
                                <p className="event-date">
                                    <strong>
                                        Old Town Beer Exchange
                                    </strong> <br/>
                                    301 Holmes Ave NE, Ste 150, Huntsville, Alabama 35801
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/445807316308711/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Learn More
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
                                <p className="event-date">
                                    <strong>
                                    The Boot Pizzeria 
                                    </strong> <br/>
                                    11505 S Memorial Pkwy, Huntsville, Alabama 35803
                                </p>
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
                                <p className="event-date">
                                    <strong>
                                    The Boot Pizzeria 
                                    </strong> <br/>
                                    11505 S Memorial Pkwy, Huntsville, Alabama 35803
                                </p>
                                <a className="event-link" 
                                    href="https://www.facebook.com/events/573999253165211/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Learn More
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