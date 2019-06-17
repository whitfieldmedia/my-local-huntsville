import React from 'react';
import Poppy from './bars/Poppy';
import Bar805 from './bars/Bar805';
import Otbx from './bars/Otbx';
import Straight from './bars/Straight';
import YellowHammer from './bars/Yellowhammer';
import Btr from './bars/Btr';
import Brickhouse from './bars/Brickhouse';
import './css/beats.css';
import { connect } from 'react-redux';
import { getEvents } from './redux/events';

class Beats extends React.Component{
    constructor() {
        super()
        this.state = {
            isLoaded: false
        }
    }
    componentDidMount() {
        this.props.getEvents();
    }
    componentDidUpdate() {
        if(this.props.events.data && !this.state.isLoaded) {
            this.setState({
                isLoaded: true
            })
        }
    }
    render() {
        if(this.state.isLoaded) {
            console.log(this.props.events.data.results.map(data => data));
        }
        return(
            <div className="beats-page">
                {/* <div className="concert-wrapper">
                    {this.state.isLoaded
                    ? this.props.events.data.results.map(data => (
                        <div key={data.id}>
                            <h2 className="concert-title"> {data.title} </h2>
                            <div>
                                {data.entities.map(info => (
                                    <div key={info.entity_id}>
                                        <p> {info.formatted_address} </p>
                                        <p> {info.name} </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                    : null}
                </div> */}
                <div className="bars-wrapper">
                    <Poppy className="beat-bar" />
                    <Otbx className="beat-bar" />
                    <Straight className="beat-bar" />
                    <Bar805 className="beat-bar" />
                    <YellowHammer className="beat-bar" />
                    <Btr className="beat-bar" />
                    <Brickhouse className="beat-bar" />
                </div>
            </div>
        )
    }
}

export default connect(state => state, { getEvents })(Beats);