import React from 'react';

class BulletMobile extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <div className="home-video-holder">
                    <iframe className="home-video" src="https://player.vimeo.com/video/327991824" allow="autoplay; fullscreen" title="Bullet and Barrel ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="video-description-container">
                    <h2 className="video-title"> Bullet & Barrel </h2>
                    <a className="video-from" href="https://vimeo.com/user61613993" target="_blank" rel="noopener noreferrer"> from We Make Ads on Vimeo </a>
                </div>
            </div>
        )
    }
}

export default BulletMobile;