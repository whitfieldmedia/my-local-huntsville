import React from 'react';
import logo from '../images/btrHuntsville.png';

class Btr extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <img src={logo} className="partner-logo" alt="BTR ~ Huntsville Alabama"/>
                <h2 className="video-header"> Below The Radar </h2>
                <iframe className="home-video" src="https://player.vimeo.com/video/297397394" title="BTR ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Btr