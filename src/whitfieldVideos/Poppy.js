import React from 'react';

class Poppy extends React.Component{
    render() {
        return (
            <div className="video-holder">
                <div className="home-video-holder">
                    <iframe className="home-video" src="https://player.vimeo.com/video/336637294?title=0&byline=0&portrait=0&autoplay=1&muted=1" width="640" height="360" allow="autoplay; fullscreen" title="The Poppy ~ Huntsville Alabama" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="video-description-container">
                    <h2 className="video-title"> The Poppy </h2>
                    <a className="video-from" href="https://vimeo.com/user61613993" target="_blank" rel="noopener noreferrer"> from We Make Ads on Vimeo </a>
                </div>
                <a className="beer-menu" href="https://www.beermenus.com/places/62886-the-poppy#menu" target="_blank" rel="noopener noreferrer"> View Beer Menu </a>
            </div>
        )
    }
}

export default Poppy;