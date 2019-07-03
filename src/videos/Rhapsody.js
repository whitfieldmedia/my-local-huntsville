import React from 'react';

const Rhapsody = () => {
    return (
        <div className="sbe-video-container">
            <iframe className="home-video" title="The Rhapsody Kim Scott" src="https://player.vimeo.com/video/344771354?title=0&byline=0&portrait=0" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            <p><a href="https://vimeo.com/344771354">The Rhapsody Jazz Cafe with Kim Scott</a> <br/> from <a href="https://vimeo.com/streetseatsandbeats">Streets Eats and Beats</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
            {/* <iframe className="home-video" title="The Rhapsody Kim Scott" src="https://player.vimeo.com/video/344771354" frameborder="0" allowFullScreen></iframe> */}
        </div>
    )
}

export default Rhapsody;