import React from 'react';
import logo from '../images/805Bar.jpg';

class Bar805 extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <img src={logo} className="partner-logo" alt="Bar at 805 ~ Huntsville Alabama"/>
                <h2 className="video-header"> The Bar at 805 </h2>
                <iframe className="home-video" src="https://player.vimeo.com/video/325227310" title="Bar at 805 ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Bar805;