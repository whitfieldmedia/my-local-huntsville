import React from 'react';
import logo from '../images/another-broken-egg.png';

class BrokenEgg extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <img src={logo} className="partner-logo" alt="Another Broken Egg ~ Huntsville Alabama"/>
                <h2 className="video-header"> Another Broken Egg </h2>
                <iframe className="home-video" src="https://player.vimeo.com/video/325227057" title="Another Broken Egg ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default BrokenEgg