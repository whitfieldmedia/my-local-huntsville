import React from 'react';
import logo from '../images/botanical-gardens.png';

class Gardens extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <img src={logo} className="partner-logo" alt="Botanical Gardens ~ Huntsville Alabama"/>
                <h2 className="video-header"> Botanical Gardens </h2>
                <iframe className="home-video" src="https://player.vimeo.com/video/336637837" title="Botanical Gardens ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Gardens