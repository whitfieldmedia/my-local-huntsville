import React from 'react';
import logo from '../images/purplecup-logo.png';
import map from '../images/art-trail-huntsville.png';
import '../css/styles.css';

class ArtTrail extends React.Component{
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    showMap = () => {
        this.setState({
            show: true
        })
    }
    closeMap = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div className="video-holder">
                    <img src={logo} className="partner-logo" alt="Secret Art Trail ~ Huntsville Alabama"/>
                    <h2 className="video-header"> Secret Art Trail </h2>
                    <div className="map-link" onClick={this.showMap}> View Trail </div>
                    <iframe className="home-video" src="https://player.vimeo.com/video/336637837" title="Secret Art Trail ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
                {this.state.show
                ? <div className="popup-container" id="map-popup"> 
                    <div className="popupCloseButton" onClick={this.closeMap}>X</div>    
                    <img src={map} className="map-photo" alt="Downtown Huntsville Secret Art Trail"/>
                </div>
                : null }
            </div>
        )
    }
}

export default ArtTrail