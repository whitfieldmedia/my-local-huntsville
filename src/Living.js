import React from 'react';
import MortgageRight from './whitfieldVideos/MortgageRight';
import MortgageRightMobile from './whitfieldVideos/MortgageRightMobile';
import bannerTall from './bannerAd/raypearman_tall.svg';
import bannerMobile from './bannerAd/rpearman_mobile.svg';
import { Helmet } from 'react-helmet';
import './css/streets.css';


class Living extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: [
                <MortgageRight />
            ],
            videosMobile: [
                <MortgageRightMobile />
            ],
            index: 0
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    findVideo = () => {
        window.scrollTo(0,50);
        if(window.innerWidth > 500) {
            return this.state.videos[this.state.index];
        } else {
            return this.state.videosMobile[this.state.index];
        }
    }
    playMortgageRight = () => {
        this.setState({ index: 0 })
        this.findVideo();
    }
    render() {
        return (
            <div className="seb-page" id="living-page">
                <Helmet>
                    <title>
                        Living in Huntsville | Huntsville Alabama
                    </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/living-in-huntsville"/>
                    <meta name="description"
                        content="If you're moving or currently live in Huntsville we try to sponsor the best ways to get a Mortgage and practical living in one of the best cities in the United States, Huntsville Alabama." />
                </Helmet>
                <div className="seb-row">
                    <div className="seb-left-column">
                        <div className="main-video-container">
                            {this.findVideo()}
                        </div>
                        <div className="seb-right-column">
                            <div className="video-thumbnail-container">
                                <a className="mobile-banner" href="https://www.raypearman.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={bannerMobile} alt="Ray Pearman Lincoln "/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a className="banner-column" href="https://www.raypearman.com/" target="_blank" rel="noopener noreferrer">
                        <img src={bannerTall} alt="rayPearmanBanner"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Living;