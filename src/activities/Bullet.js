import React from 'react';
import logo from '../images/bullet-barrel.png';

class Bullet extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <img src={logo} className="partner-logo" alt="Bullet and Barrel ~ Huntsville Alabama"/>
                <h2 className="video-header"> Bullet and Barrel </h2>
                <iframe className="home-video" src="https://player.vimeo.com/video/327991824" title="Bullet and Barrel ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Bullet;