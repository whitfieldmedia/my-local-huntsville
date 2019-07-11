import React from 'react';

class Gardens extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <iframe className="home-video" src="https://player.vimeo.com/video/336637837?autoplay=1&muted=1" allow="autoplay; fullscreen" title="Botanical Gardens ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
                <div className="video-description-container">
                    <h2 className="video-title"> Botanical Gardens </h2>
                    <a class="video-from" href="https://vimeo.com/user61613993" target="_blank" rel="noopener noreferrer"> from We Make Ads on Vimeo </a>
                </div>
            </div>
        )
    }
}

export default Gardens