import React from 'react';
import banner from './bannerAd/930x180raypearman.jpg';
import './css/banner.css'

class Banner extends React.Component {
    render() {
        return (
            <div className="banner-container">
                <img className="banner" src={banner} alt="Ray Pearman Lincoln Dealer Huntsville Alabaman"/>
            </div>
        )
    }
}

export default Banner;