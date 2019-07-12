import React from 'react';

const Rhapsody = () => {
    return (
        <div className="sbe-video-container">
            <div className="home-video-holder">
                <iframe className="home-video" title="The Rhapsody Kim Scott" src="https://player.vimeo.com/video/344771354?title=0&byline=0&portrait=0&autoplay=1&muted=1" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </div>
            <div className="video-description-container">
                <h2 className="video-title"> The Rhapsody Jazz Cafe with kim Scott </h2>
                <a className="video-from" href="https://vimeo.com/streetseatsandbeats" target="_blank" rel="noopener noreferrer"> from Streets Eats & Beats </a>
            </div>
        </div>
    )
}

export default Rhapsody;