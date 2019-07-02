import React from 'react';
import banner from './bannerAd/930x180raypearman.jpg';
import './css/banner.css'

class Banner extends React.Component {
    render() {
        return (
            <div className="banner-container" href="https://www.raypearman.com/" target="_blank" rel="noopener noreferrer">
                <a href="https://www.raypearman.com/" target="_blank" rel="noopener noreferrer">
                    <img className="banner" src={banner} alt="Ray Pearman Lincoln Dealer Huntsville Alabaman"/>
                </a>
            </div>
        )
    }
}

export default Banner;