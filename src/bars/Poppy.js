import React from 'react';
import poppyLogo from '../images/the-poppy.png';

class Poppy extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <img src={poppyLogo} className="partner-logo" alt="The Poppy ~ Huntsville Alabama"/>
                <h2 className="video-header"> The Poppy </h2>
                <iframe className="home-video" src="https://player.vimeo.com/video/336637294" title=" ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Poppy;