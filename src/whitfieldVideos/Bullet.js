import React from 'react';

class Bullet extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <iframe className="home-video" src="https://player.vimeo.com/video/327991824?autoplay=1&muted=1" allow="autoplay; fullscreen" title="Bullet and Barrel ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
                <div className="video-description-container">
                    <h2 class="video-title"> Bullet & Barrel </h2>
                    <a class="video-from" href="https://vimeo.com/user61613993" target="_blank" rel="noopener noreferrer"> from We Make Ads on Vimeo </a>
                </div>
            </div>
        )
    }
}

export default Bullet;