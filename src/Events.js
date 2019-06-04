import React from 'react';
import { connect } from 'react-redux';
import { getFeed } from './redux/feed';
// import moment from 'moment';
import './css/events.css';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Events extends React.Component{
    constructor() {
        super()    
        this.state = {
            done: false
        }
    }
    componentDidMount() {
        this.props.getFeed();
    }
    componentDidUpdate() {
        if(this.props.feed.items && !this.state.done) {
            this.setState({
                done: true
            })
        }
    }
    createMarkup = (data) => {
        return {
            __html: data
        }
    }

    // getDate = (date) => {
    //     return moment(date).format('LL')
    //     // format("dddd, MMM DD at HH:mm a")
    // }
    transform = (node) => {
        if(node.name === '""') {
            node.type = 'tag';
            node.name = 'par';
            return convertNodeToElement(node);
        }
    }
 
    render() {
        console.log(this.props.feed.items)
        return (
            <div className="events-page">
                {this.state.done
                ? this.props.feed.items.map(item => (
                    <div key={item.id}>
                        <h1 className="event-title"> {item.title} </h1>
                        {/* <p> {this.getDate(item.isoDate)} </p> */}
                        {/* <div className="event-info" dangerouslySetInnerHTML={this.createMarkup(item.contentSnippet)} /> */}
                        <div className="event-info"> {ReactHtmlParser(item.content)} </div>
                        {/* <div className="event-info" dangerouslySetInnerHTML={this.createMarkup(item.content)} /> */}
                    </div>
                ))
                : null}
            </div>
        )
    }
}

export default connect(state => state, { getFeed })(Events);