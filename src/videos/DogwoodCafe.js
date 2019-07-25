import React from 'react';

const DogwoodCafe = () => {
    return (
        <div className="sbe-video-container">
            <div className="home-video-holder">
                <iframe title="The Dogwood Cafe" className="home-video" src="https://player.vimeo.com/video/349740092?autoplay=1&muted=10" width="640" height="360" frameBorder="0" allowFullScreen ></iframe>
            </div>
            <div className="video-description-container">
                <h2 className="video-title"> The Dogwood Cafe </h2>
                <a className="video-from" href="https://vimeo.com/streetseatsandbeats" target="_blank" rel="noopener noreferrer"> from Streets Eats & Beats </a>
            </div>
        </div>
    )
}

export default DogwoodCafe;