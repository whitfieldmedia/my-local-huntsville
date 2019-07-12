import React from 'react';

class StraightMobile extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <div className="home-video-holder">
                    <iframe className="home-video" src="https://player.vimeo.com/video/328009086" allow="autoplay; fullscreen" title="Straight to Ale ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="video-description-container">
                    <h2 className="video-title"> Straight To Ale </h2>
                    <a className="video-from" href="https://vimeo.com/user61613993" target="_blank" rel="noopener noreferrer"> from We Make Ads on Vimeo </a>
                </div>
            </div>
        )
    }
}

export default StraightMobile;