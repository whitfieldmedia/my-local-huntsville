import React from 'react';
import map from '../images/art-trail-huntsville.png';
import '../css/styles.css';

class ArtWalk extends React.Component{
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
                <div className="home-video-holder">
                    <iframe className="home-video" src="https://player.vimeo.com/video/336352225?autoplay=1&muted=1" allow="autoplay; fullscreen" title="Secret Art Trail ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="video-description-container">
                    <h2 className="video-title"> Secret Art Walk </h2>
                    <a className="video-from" href="https://vimeo.com/user61613993" target="_blank" rel="noopener noreferrer"> from We Make Ads on Vimeo </a>
                    <div className="art-map-link" onClick={this.showMap}> View Trail </div>
                </div>
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

export default ArtWalk;