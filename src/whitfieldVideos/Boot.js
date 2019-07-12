import React from 'react';
 
class Boot extends React.Component {
    render() {
        return (
            <div className="video-holder">
                <div class="home-video-holder">
                    <iframe className="home-video" src="https://player.vimeo.com/video/326639658?autoplay=1&muted=1" allow="autoplay; fullscreen" title="The Boot Pizzeria Commercial ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="video-description-container">
                    <h2 className="video-title"> The Boot Pizzeria </h2>
                    <a className="video-from" href="https://vimeo.com/user61613993" target="_blank" rel="noopener noreferrer"> from We Make Ads on Vimeo </a>
                </div>
            </div>
        )
    }
}

export default Boot;