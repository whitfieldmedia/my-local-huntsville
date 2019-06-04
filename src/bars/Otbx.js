import React from 'react';
import logo from '../images/otbx2.png';

class Otbx extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <img src={logo} className="partner-logo" alt="OTBX  ~ Huntsville Alabama"/>
                <h2 className="video-header"> Old Town Beer Exchange </h2>
                <iframe className="home-video" src="https://player.vimeo.com/video/336636611" title="OTBX ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Otbx;