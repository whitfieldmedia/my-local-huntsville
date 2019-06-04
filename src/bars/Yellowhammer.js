import React from 'react';
import logo from '../images/yellowhammer.png';

class Yellowhammer extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <img src={logo} className="partner-logo" alt="Yellowhammer Earth & Stone ~ Huntsville Alabama"/>
                <h2 className="video-header"> Yellowhammer Earth & Stone </h2>
                <iframe className="home-video" src="https://player.vimeo.com/video/327992338" title="Yellowhammer Earth & Stone ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Yellowhammer