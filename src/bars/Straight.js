import React from 'react';
import logo from '../images/straight-to-ale.png';

class Straight extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <img src={logo} className="partner-logo" alt="Straight to Ale ~ Huntsville Alabama"/>
                <h2 className="video-header"> Straight to Ale </h2>
                <iframe className="home-video" src="https://player.vimeo.com/video/328009086" title="Straight to Ale ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Straight;