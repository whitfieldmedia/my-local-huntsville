import React from 'react';
import logo from '../images/otbx-solid.png';

class Otbx extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <img src={logo} className="partner-logo" id="otbx-logo" alt="OTBX  ~ Huntsville Alabama"/>
                <h2 className="video-header"> Old Town Beer Exchange </h2>
                <div className="menu-row">
                    <a className="beer-menu" href="http://otbxhsv.com/beer/" target="_blank" rel="noopener noreferrer"> View Beer Menu </a>
                    <a className="beer-menu" href="http://otbxhsv.com/wine/" target="_blank" rel="noopener noreferrer"> View Wine Menu </a>
                </div>

                <iframe className="home-video" src="https://player.vimeo.com/video/336636611" title="OTBX ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Otbx;