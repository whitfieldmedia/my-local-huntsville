import React from 'react';
import './css/events.css';
import moment from 'moment';
import { getFeed } from './redux/feed';
import { connect } from 'react-redux';

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
        console.log(this.props.feed.items)
        return (
            <div className="events-page">
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
        )
    }
}

export default connect(state => state, { getFeed })(Events);