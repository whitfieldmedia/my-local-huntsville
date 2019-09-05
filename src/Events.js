import React from 'react';
import moment from 'moment';
import FarmersMarket from './videos/FarmersMarketEvent';
import CrushWineFestival from './videos/CrushWineFestivalEvent';
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
        this.setState({
            isClicked: !this.state.isClicked,
            index: index
        })
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
                <div className="festival-event-holder">
                    <div className="event-video-holder">
                        <CrushWineFestival />
                    </div>
                    <div className="event-video-holder">
                        <FarmersMarket />
                    </div>
                </div>
                <div className="festival-event-holder">

                </div>
                <div className="events-page">
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title"> Oktoberfest at Straight to Ale & Yellowhammer </h2>
                            <div className="event-row">
                                <p className="event-par"> Campus No. 805 </p>
                                <p className="event-par"> Saturday 9-7-2019 </p>
                            </div>
                        </div>
                    </div>
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title"> Parish Brewing Tap Event </h2>
                            <div className="event-row">
                                <p className="event-par"> Old Town Beer Exchange </p>
                                <p className="event-par"> Friday 9-6-2019 </p>
                            </div>
                        </div>
                    </div>
                    <div className="event-holder">
                        <div className="event-container">
                            <h2 className="event-title"> Bottomless Mimosa Class </h2>
                            <div className="event-row">
                                <p className="event-par"> Pinot's Palette </p>
                                <p className="event-par"> Saturday 9-7-2019 3 PM </p>
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