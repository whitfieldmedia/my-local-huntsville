import React from 'react';
import Poppy from './bars/Poppy';
import Bar805 from './bars/Bar805';
import Otbx from './bars/Otbx';
import './css/beats.css';
import { connect } from 'react-redux';
import { getEvents } from './redux/events';
import bySongkick from './icons/by-songkick-black.svg';
import moment from 'moment';
import { Helmet } from 'react-helmet';

class Beats extends React.Component{
    constructor() {
        super()
        this.state = {
            isLoaded: false
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
        this.props.getEvents();
    }
    componentDidUpdate() {
        if(this.props.events.resultsPage && !this.state.isLoaded) {
            this.setState({
                isLoaded: true
            })
        }
    }
    getDate = (data) => {
        return moment(data).format('dddd, LL')
    }
    getTime = (data) => {
        return moment(data).format('LT')
    }
    render() { 
        if(this.state.isLoaded) {
            console.log(this.props.events.resultsPage.results.event.map(res => res));
        }
        return(
            <div className="beats-page">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> Beats in Huntsville, Alabama </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/beats"/>
                    <meta name="description" content="Looking to have a fun night in Huntsville? Here are the best bars that have live music and upcoming concerts." />
                </Helmet>
                <h1 className="beats-bars-header"> Our Favorite Bars </h1>
                <div className="bars-wrapper">
                    <div className="beats-bar-holder">
                        <Poppy />
                    </div>
                    <div className="beats-bar-holder">
                        <Otbx />
                    </div>
                    <div className="beats-bar-holder">
                        <Bar805 />
                    </div>
                </div>
                <div className="concert-container">
                    <h1 className="songkick-header"> Upcoming Concerts </h1>
                    <img className="songkick-logo" src={bySongkick} alt=""/>
                    <div className="concert-wrapper">
                        {this.state.isLoaded 
                        ? this.props.events.resultsPage.results.event.map(res => (
                            <a key={res.id} href={res.uri} className="concert-holder" target="_blank" rel="noopener noreferrer">
                                {res.performance.map(data => (
                                    <div key={data.id}>
                                        <h2 className="artist-name"> {data.displayName} </h2>
                                    </div>
                                ))}
                                <p className="concert-venue"> {res.venue.displayName}, {res.venue.metroArea.displayName}, {res.venue.metroArea.state.displayName} </p>
                                <p className="concert-date"> {this.getDate(res.start.date)} </p>
                            </a>
                        ))
                        : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state, { getEvents })(Beats);