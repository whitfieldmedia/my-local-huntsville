import React from 'react';
import newsletter from './images/february_newsletter.png';
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
                    <div className="event-video-container">
                        <iframe title="Beaks and Barks Huntsville Botanical Garden" 
                            className="event-video"
                            src="https://player.vimeo.com/video/386534701" 
                            width="640" 
                            height="360" 
                            frameBorder="0" 
                            allow="autoplay; fullscreen" 
                            allowFullScreen>
                        </iframe>
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
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Bullet+and+Barrel+Indoor+Shooting+Range+and+Training+Facility/@34.6906816,-86.5952085,17z/data=!3m1!4b1!4m5!3m4!1s0x88626df1260d9461:0x5d953fe1a8db0303!8m2!3d34.6906772!4d-86.5930198"
                                target="_blank"
                                rel="noopener noreferrer">
                                Bullet and Barrel
                            </a>
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
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Huntsville+Botanical+Garden/@34.7075,-86.6362262,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c6e9ec1e7c5:0x9cecb08319fc29da!8m2!3d34.7074956!4d-86.6340375"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Huntsville Botanical Garden
                            </a>
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
                                Midland
                            </h2>
                            <p className="event-date">
                                Friday February 7 at 8 PM
                            </p>
                            <a className="event-link" 
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/midland/3332867/?eventId=3332867&eventName=Midland&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=02%2f07%2f2020+20%3a00%3a00&city=Huntsville&stateProvince=AL&performerId=56480&performerName=Midland&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
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
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Huntsville+Botanical+Garden/@34.7075,-86.6362262,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c6e9ec1e7c5:0x9cecb08319fc29da!8m2!3d34.7074956!4d-86.6340375"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Huntsville Botanical Garden
                            </a>
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
                            <a className="event-link" 
                                href="https://www.google.com/maps/place/Von+Braun+Center/@34.7258998,-86.5925395,17z/data=!3m1!4b1!4m5!3m4!1s0x88626ca7f8492cd1:0xa7bc20d4450d9c99!8m2!3d34.7258954!4d-86.5903508" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Von Braun Center
                            </a>
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
                                Rumors - A Tribute to Fleetwood Mac
                            </h2>
                            <p className="event-date">
                                Saturday February 8 at 8:30 PM
                            </p>
                            <a className="event-link" 
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/rumors-a-tribute-to-fleetwood-mac/3318628/?eventId=3318628&eventName=Rumors+-+A+Tribute+to+Fleetwood+Mac&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=02%2f08%2f2020+20%3a30%3a00&city=Huntsville&stateProvince=AL&performerId=104228&performerName=Rumors+-+A+Tribute+to+Fleetwood+Mac&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
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
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Bullet+and+Barrel+Indoor+Shooting+Range+and+Training+Facility/@34.6906816,-86.5952085,17z/data=!3m1!4b1!4m5!3m4!1s0x88626df1260d9461:0x5d953fe1a8db0303!8m2!3d34.6906772!4d-86.5930198"
                                target="_blank"
                                rel="noopener noreferrer">
                                Bullet and Barrel
                            </a>
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
                            <a className="event-link" 
                                href="https://www.google.com/maps/place/Old+Town+Beer+Exchange/@34.7334093,-86.5871641,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b53dce4f20d:0x8ce6cabd51033e84!8m2!3d34.7334049!4d-86.5849754"
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Old Town Beer Exchange
                            </a>
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
                                Alter Bridge
                            </h2>
                            <p className="event-date">
                                Tuesday February 11 at 7 PM
                            </p>
                            <a className="event-link" 
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/alter-bridge/3333283/?eventId=3333283&eventName=Alter+Bridge&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=02%2f11%2f2020+19%3a00%3a00&city=Huntsville&stateProvince=AL&performerId=5693&performerName=Alter+Bridge&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title"> 
                                Down Range
                            </h2>
                            <p className="event-date">
                                Wednesday, February 12, 2020 at 5:30 PM – 6:30 PM
                                <br/>
                            </p>
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Bullet+and+Barrel+Indoor+Shooting+Range+and+Training+Facility/@34.6906816,-86.5952085,17z/data=!3m1!4b1!4m5!3m4!1s0x88626df1260d9461:0x5d953fe1a8db0303!8m2!3d34.6906772!4d-86.5930198"
                                target="_blank"
                                rel="noopener noreferrer">
                                Bullet and Barrel
                            </a>
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
                                Asleep at the Wheel
                            </h2>
                            <p className="event-date">
                                Wednesday February 12 at 8 PM
                            </p>
                            <a className="event-link" 
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/asleep-at-the-wheel/3363782/?eventId=3363782&eventName=Asleep+at+the+Wheel&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=02%2f12%2f2020+20%3a00%3a00&city=Huntsville&stateProvince=AL&performerId=2385&performerName=Asleep+at+the+Wheel&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
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
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Bullet+and+Barrel+Indoor+Shooting+Range+and+Training+Facility/@34.6906816,-86.5952085,17z/data=!3m1!4b1!4m5!3m4!1s0x88626df1260d9461:0x5d953fe1a8db0303!8m2!3d34.6906772!4d-86.5930198"
                                target="_blank"
                                rel="noopener noreferrer">
                                Bullet and Barrel
                            </a>
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
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Bullet+and+Barrel+Indoor+Shooting+Range+and+Training+Facility/@34.6906816,-86.5952085,17z/data=!3m1!4b1!4m5!3m4!1s0x88626df1260d9461:0x5d953fe1a8db0303!8m2!3d34.6906772!4d-86.5930198"
                                target="_blank"
                                rel="noopener noreferrer">
                                Bullet and Barrel
                            </a>
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
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Bullet+and+Barrel+Indoor+Shooting+Range+and+Training+Facility/@34.6906816,-86.5952085,17z/data=!3m1!4b1!4m5!3m4!1s0x88626df1260d9461:0x5d953fe1a8db0303!8m2!3d34.6906772!4d-86.5930198"
                                target="_blank"
                                rel="noopener noreferrer">
                                Bullet and Barrel
                            </a>
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
                                Tesla
                            </h2>
                            <p className="event-date">
                                Wednesday February 19 at 8 PM
                            </p>
                            <a className="event-link" 
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/tesla/3347755/?eventId=3347755&eventName=Tesla&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=02%2f19%2f2020+20%3a00%3a00&city=Huntsville&stateProvince=AL&performerId=1527&performerName=Tesla&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Walk Off The Earth
                            </h2>
                            <p className="event-date">
                                Friday February 21 at 7:30 PM
                            </p>
                            <a className="event-link" 
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/walk-off-the-earth/3344109/?eventId=3344109&eventName=Walk+Off+The+Earth&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=02%2f21%2f2020+19%3a30%3a00&city=Huntsville&stateProvince=AL&performerId=29316&performerName=Walk+Off+The+Earth&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
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
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Bullet+and+Barrel+Indoor+Shooting+Range+and+Training+Facility/@34.6906816,-86.5952085,17z/data=!3m1!4b1!4m5!3m4!1s0x88626df1260d9461:0x5d953fe1a8db0303!8m2!3d34.6906772!4d-86.5930198"
                                target="_blank"
                                rel="noopener noreferrer">
                                Bullet and Barrel
                            </a>
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
                                Queensryche
                            </h2>
                            <p className="event-date">
                                Tuesday, February 25 at 7:30 PM
                            </p>
                            <a className="event-link" 
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/queensryche/3320466/?eventId=3320466&eventName=Queensryche&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=02%2f25%2f2020+19%3a30%3a00&city=Huntsville&stateProvince=AL&performerId=702&performerName=Queensryche&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </a>
                        </div>
                    </div>
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title">
                                Chris Janson
                            </h2>
                            <p className="event-date">
                                Friday, February 28 at 7:30
                            </p>
                            <a className="event-link" 
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/chris-janson/3318618/?eventId=3318618&eventName=Chris+Janson&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=02%2f28%2f2020+19%3a30%3a00&city=Huntsville&stateProvince=AL&performerId=34461&performerName=Chris+Janson&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
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
                            <a className="event-link"
                                href="https://www.google.com/maps/place/Huntsville+Botanical+Garden/@34.7075,-86.6362262,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c6e9ec1e7c5:0x9cecb08319fc29da!8m2!3d34.7074956!4d-86.6340375"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Huntsville Botanical Garden
                            </a>
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
                                Skillet
                            </h2>
                            <p className="event-date">
                                Saturday, February 29 at 7:30 PM
                            </p>
                            <a className="event-link" 
                                href="https://www.google.com/maps/place/Mars+Music+Hall/@34.7287337,-86.5931798,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b281ce0cd05:0x4e0126a3ed3c3291!8m2!3d34.7287293!4d-86.5909911" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Mars Music Hall at Von Braun Center
                            </a>
                            <a className="event-link" href="https://tickets-center.com/tickets/v/mars-music-hall-at-von-braun-center/24998/e/skillet/3359771/?eventId=3359771&eventName=Skillet&venueName=Mars+Music+Hall+at+Von+Braun+Center&venueId=24998&eventDateTime=02%2f29%2f2020+19%3a30%3a00&city=Huntsville&stateProvince=AL&performerId=6592&performerName=Skillet&cid=0&nid=0&accid=0&wsvar=0-0+%5brdmclid%7c63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc%5d&rdmclid=63cc65a0-f342-47ed-a4d6-f2cb03f2fcbc&vx=0" target="_blank" rel="noopener noreferrer">
                                Get Tickets
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
                            <a className="event-link" 
                                href="https://www.google.com/maps/place/Old+Town+Beer+Exchange/@34.7334093,-86.5871641,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b53dce4f20d:0x8ce6cabd51033e84!8m2!3d34.7334049!4d-86.5849754"
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Old Town Beer Exchange
                            </a>
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