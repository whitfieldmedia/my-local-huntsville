import React from 'react';
import waltonsLogo from '../images/waltons-logo-solid.png';

class Waltons extends React.Component {
    render() {
        return (
            <div className="video-holder">
                <img src={waltonsLogo} className="partner-logo" id="waltons-logo" alt="Waltons Southern Table"/>
                <h2 className="video-header"> Walton's Southern Table </h2>
                <iframe className="home-video" src="https://player.vimeo.com/video/344604719" title="Walton's Southern Table" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Waltons;