import React from 'react';
import { connect } from 'react-redux';
import { getFeed } from './redux/feed';
import moment from 'moment';
import './css/homeEvents.css';

class HomeEvents extends React.Component {
    constructor() {
        super()
        this.state = {
            events: false,
            count: 0,
            isClicked: false,
            index: 0
        }
    }
    componentDidMount() {
        this.props.getFeed();
    }
    componentDidUpdate() {
        if(this.props.feed && !this.state.events) {
            this.setState({
                events: true
            })
        }
    }
    sendData = (data) => {
        return {
            __html: data
        }
    }
    getDate = (data) => {
        return moment(data).format('dddd, LL')
    }
    handleClick = (index, e) => {
        e.preventDefault();
        console.log(index);
        this.setState({
            isClicked: !this.state.isClicked,
            index: index
        })
    }

    render() {
        console.log(this.props.feed.items)
        return (
            <div className="home-events-page">
                {(this.state.events)
                ? this.props.feed.items.slice(0, 3).map((event, index) => (
                    <div className="home-events-wrapper" key={index} onClick={(e) => this.handleClick(index, e)}>
                        <div className="home-events-container">
                            <h2 className="home-event-title"> {event.title} </h2>
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
        )
    }
}

export default connect(state => state, { getFeed })(HomeEvents);