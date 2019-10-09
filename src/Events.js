import React from 'react';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { getFeed } from './redux/feed';
import { connect } from 'react-redux';
import './css/events.css';

class Events extends React.Component{
    constructor() {
        super()    
        this.state = {
            done: false,
            data: [],
            isClicked: false,
            index: 0
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
        this.props.getFeed();
    }
    componentDidUpdate() {
        if(this.props.feed && !this.state.done) {
            this.setState({
                done: true
            })
        }
    }
    sendData = (data) => {
        console.log(data);
        return {
            __html: data
        }
    }
    getDate = (data) => {
        return moment(data).format('dddd, LL')
    }
    handleClick = (index, e) => {
        e.preventDefault();
        if(index === this.state.index) {
            this.setState({
                isClicked: false,
                index: 1000
            })
        } else {
            this.setState({
                isClicked: true,
                index: index
            })
        }
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
                    <div className="event-holder" onClick={(e) => this.handleClick(666, e)}>
                        <div className="event-container">
                            <h2 className="event-title"> Fall Color Special </h2>
                            <p className="home-event-date">
                                October 26 - November 2, 2019 <br/>
                            </p>
                            {(this.state.isClicked && this.state.index === 666) ?
                            <p className="event-info"> 
                            What’s your favorite image of fall??  Apple picking? Pumpkins? Red, orange, & yellow leaves?  Bonfires & roasted marshmallows (yum!)?  Hot Chocolate & Fuzzy Socks?  Chilly evenings & hay rides?  We hope a train ride is on your Fall Bucket List!  The Mercury & Chase Railroad has track that winds in and out of beautiful North Alabama scenery.  Make sure your cameras are ready-you don’t want to miss the colors from our large, picture windows!  These rides are very popular, so be sure you purchase your seats early!  The North Alabama Railroad Museum is proud to debut the 1949 Southern Railway Pullman Sleeper Coach during our 2019 Fall Color Specials.  This coach has been refurbished and is ready to accommodate our VIP guests.  This coach has 3 private suites (6 person capacity-max 4 adults) designed for families & 9 roomettes (2 person capacity) designed for couples.  The Sleeper Coach guests will have a warm and scrumptious treat to enjoy and will receive a special commemorative mug.  
                            <br/><br/>
                            Ticket Prices: 
                                Adults-$15, children 12 and under-$10
                                Sleeper Coach VIP Experience:
                                    Suites (max 6 people) - $250
                                    Roomettes (max 2 people) -$80
                            <br/><br/>
                            Duration: An hour and twenty minute excursion 
                            <br/><br/>
                            Departures: Saturday, October 26 at 10am and 1pm
                                        Saturday, November 2 at 10am and 1pm
                            <br/><br/>
                            <a className="event-link" href="https://www.facebook.com/events/495535601233944/?event_time_id=495535604567277%3Fti" target="_blank" rel="noopener noreferrer">
                                Learn More >
                            </a>
                            </p>
                            : null}
                        </div>
                    </div>
                    <div className="event-holder" onClick={(e) => this.handleClick(777, e)}>
                        <div className="event-container">
                            <h2 className="event-title"> 2019 Gingerbread Marketplace </h2>
                            <p className="home-event-date">
                                Saturday, November 9, 2019 at 9AM-4PM <br/>
                            </p>
                            {(this.state.isClicked && this.state.index === 777)
                            ?
                            <div className="event-info">
                                The Gingerbread Marketplace is a huge holiday shopping experience for those looking for UNIQUE gift items just in time for Christmas! This will be our 6th annual event and will be held on Saturday, November 9th from 9:00am-4:00pm at The Alabama A&M Agribition Center! (The address is 4925 Moores Mill Road Huntsville, AL 35811). We will have over 100 unique crafters, local vendors & food trucks. There will also be fun interactive art booths for children, Christmas music, a photo booth & more! You can also find a huge variety of local vendors specializing in on-site monogramming/vinyl, handmade jewelry, candles, soaps, home decor, women's boutique clothing, children's clothing, yard art, specialty food and SO MUCH MORE! We even have a big surprise that we will announce in early October! Start your Christmas shopping early & bring a friend! :) You will not want to miss this fun holiday event...please SHARE!
                                <br/><br/>
                                Admission is only $2 per person
                                (This Covers Parking & Entry - Children 12 & under are free)
                                <br/><br/>
                                Our event is now FULL and not accepting new vendors. To be added to our waiting list or for  
                                Questions regarding this event, please email: gingerbreadmarketplace@gmail.com
                                <br/><br/>
                                <a className="event-link" href="https://www.facebook.com/events/373338373299672/" target="_blank" rel="noopener noreferrer">
                                    Learn More >
                                </a>
                            </div>
                            :null}
                        </div>
                    </div>
                    <div className="event-holder" onClick={(e) => this.handleClick(888, e)}>
                        <div className="event-container">
                            <h2 className="event-title"> Trick 'R Treat at the Mill! </h2>
                            <p className="home-event-date"> Saturday October 26, 2019 at 1PM-4PM </p>
                            {(this.state.isClicked && this.state.index === 888)
                            ?
                            <div className="event-info">
                                Come trick-or-treat your way through the halls of historic and haunting Lowe Mill. Artists will have their studios open, handing out candy, treats, and other surprises to the swarm of little ones who visit during this exciting event.
                                <br/> <br/>
                                Due to the popularity of this event, we ask parents to donate a bag of candy to make sure everyone gets their fill of Halloween treats.
                                <br/> <br/>
                                This is a rain or shine event!
                                <br/> <br/>
                                <a className="event-link" href="https://www.facebook.com/events/383404172552674/" target="_blank" rel="noopener noreferrer">
                                    Learn More >
                                </a>
                            </div>
                            : null}
                        </div>
                    </div>
                    <div className="event-holder" onClick={(e) => this.handleClick(999, e)}>
                        <div className="event-container">
                            <h2 className="event-title"> A Christmas Story </h2>
                            <p className="home-event-date"> 
                                November 15-17, 2019 <br/>
                                Friday 7:30PM <br/>
                                Saturday 7:30PM <br/>
                                Sunday 2PM <br/>
                            </p>
                            <div className="event-popup-container">
                                {(this.state.isClicked && this.state.index === 999)
                                ?
                                <div className="event-info">
                                Humorist Jean Shepherd’s memoir of growing up in the midwest in the 1940s follows 9-year-old Ralphie Parker in his quest to get a genuine Red Ryder BB gun under the tree for Christmas. Ralphie pleads his case before his mother, his teacher, and even Santa Claus himself at Higbee’s Department Store. The consistent response: “You’ll shoot your eye out, kid!” All the elements from the beloved motion picture are here, including the family’s temperamental exploding furnace; Scut Farkas, the school bully; the boys’ experiment with a wet tongue on a cold lamppost; the Little Orphan Annie decoder pin; Ralphie’s father winning a lamp shaped like a woman’s leg in a net stocking; Ralphie’s fantasy scenarios and more. A Christmas Story is destined to become a theatrical holiday perennial. <br/> <br/> <br/> <br/> <br/>
                                Director: Mark B. Moore <br/>
                                Assistant Director: Jason Anders <br/>
                                Technical Director: Josh Phillips <br/>
                                <br/>
                                Cast List:
                                <br/>
                                Ralphie Parker - Hugh Cook
                                Ralph Parker - Jon Brown
                                Esther Jane - Beasley Hargrove
                                Flick - Evan Willis
                                Helen - Kayla Schonrock
                                Miss Shields - Tammi McLemore
                                Mother - April Schonrock
                                Schwartz - Nate Bennett
                                Farkus - Ethan Clark
                                The Old Man - John Willis
                                Randy - Vincent Dunkerley
                                Santa Claus - Jay Hixon
                                <br/><br/>
                                Produced by special arrangement with Dramatic Publishing Company, Woodstock, IL
                                <br/><br/>
                                <a className="event-link" href="https://www.facebook.com/events/424579628270238/?event_time_id=424579641603570%3Fti" target="_blank" rel="noopener noreferrer"> Learn More > </a>  
                                </div>
                                : null}
                            </div>
                        </div>
                    </div>
                {this.state.done
                ? this.props.feed.items.map((event, index) => (
                    <div className="event-holder" key={index} onClick={(e) => this.handleClick(index, e)}>
                        <div className="event-container">
                            <h2 className="event-title"> {event.title} </h2>
                            {(this.state.isClicked && index === this.state.index)
                            ? 
                            <div className="event-popup-container">
                                <div dangerouslySetInnerHTML={this.sendData(event.content)}/>
                            </div>
                            : <p className="home-event-date"> {this.getDate(event.isoDate)} </p> }
                        </div>
                    </div>
                ))
                : null}
                </div>
            </div>
        )
    }
}

export default connect(state => state, { getFeed })(Events);    