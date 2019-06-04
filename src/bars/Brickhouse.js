import React from 'react';
import logo from '../images/brickhouse-sports-cafe-logo.png';

class Brickhouse extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <img src={logo} className="partner-logo" alt="Brickhouse Sports Cafe ~ Huntsville Alabama"/>
                <h2 className="video-header"> Brickhouse Sports Cafe </h2>
                <iframe className="home-video" src="https://player.vimeo.com/video/325911869" title="Brickhouse Sports Cafe ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Brickhouse;