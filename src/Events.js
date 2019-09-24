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
                <div className="events-page">
                    <div className="event-holder">
                        <h2 className="event-container">
                            <h2 className="event-title"> Downtown Huntsville's Medical District Best Bites! </h2>
                            <p className="home-event-date"> Thursday, September 26, 2019 </p>
                        </h2>
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