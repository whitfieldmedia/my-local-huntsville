import React from 'react';

const BrassTap = () => {
    return (
        <div className="sbe-video-container">
            <div className="home-video-holder">
                <iframe title="The Brass Tap" className="home-video" src="https://player.vimeo.com/video/353154468?title=0&byline-0&portrait=0&autoplay=1&muted=1" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </div> 
            <div className="video-description-container">
                <h2 className="video-title"> The Brass Tap </h2>
                <a className="video-from" href="https://vimeo.com/streetseatsandbeats" target="_blank" rel="noopener noreferrer"> from Streets Eats & Beats </a>
            </div>
        </div>
    )
}

export default BrassTap;