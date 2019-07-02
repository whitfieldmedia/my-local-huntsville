import React from 'react';
import bootPizza from '../images/boot-solid.png';
 
class Boot extends React.Component {
    render() {
        return (
            <div className="video-holder">
                <img src={bootPizza} className="partner-logo" id="boot-logo" alt="The Boot Pizzeria ~ Huntsville Alabama"/>
                <h2 className="video-header"> The Boot Pizzeria </h2>
                <iframe className="home-video" src="https://player.vimeo.com/video/326639658" title="The Boot Pizzeria Commercial ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Boot;