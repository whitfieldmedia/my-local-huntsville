import React from 'react';

class OtbxMobile extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <div className="home-video-holder">
                    <iframe className="home-video" src="https://player.vimeo.com/video/336636611?title=0&byline=0&portrait=0" width="640" height="360" allow="autoplay; fullscreen" title="OTBX ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="video-description-container">
                    <h2 className="video-title"> Old Town Beer Exchange </h2>
                    <a className="video-from" href="https://vimeo.com/user61613993" target="_blank" rel="noopener noreferrer"> from We Make Ads on Vimeo </a>
                </div>
                <div className="menu-row">
                    <a className="beer-menu" href="http://otbxhsv.com/beer/" target="_blank" rel="noopener noreferrer"> View Beer Menu </a>
                    <a className="beer-menu" href="http://otbxhsv.com/wine/" target="_blank" rel="noopener noreferrer"> View Wine Menu </a>
                </div>
            </div>
        )
    }
}

export default OtbxMobile;