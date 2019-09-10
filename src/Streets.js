import React from 'react';
import ArtWalk from './whitfieldVideos/ArtWalk';
import Bullet from './whitfieldVideos/Bullet';
import Gardens from './whitfieldVideos/Gardens';
import ArtWalkMobile from './whitfieldVideos/ArtWalkMobile';
import BulletMobile from './whitfieldVideos/BulletMobile';
import GardensMobile from './whitfieldVideos/GardensMobile';
import { Helmet } from 'react-helmet';
import artThumbnail from './whitfieldVideos/thumbnails/artWalk.png';
import botanicalThumbnail from './whitfieldVideos/thumbnails/botanicalGardens.png';
import bulletThumbnail from './whitfieldVideos/thumbnails/bulletBarrel.png';
import bannerTall from './bannerAd/raypearman_tall.svg';
import bannerMobile from './bannerAd/rpearman_mobile.svg';
import './css/streets.css';

class Streets extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: [
                <ArtWalk />,
                <Gardens />,
                <Bullet />
            ],
            videosMobile: [
                <ArtWalkMobile />,
                <GardensMobile />,
                <BulletMobile />
            ],
            index: 0
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    findVideo = () => {
        window.scrollTo(0,0)
        if(window.innerWidth > 500) {
            return this.state.videos[this.state.index]
        } else {
            return this.state.videosMobile[this.state.index];
        }
    }
    playArt = () => {
        this.setState({ index: 0 })
        this.findVideo()
    }
    playBotanical = () => {
        this.setState({ index: 1 })
        this.findVideo()
    }
    playBullet = () => {
        this.setState({ index: 2 })
        this.findVideo()
    }
    render() {
        return (
            <div className="seb-page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Best Activities in Huntsville Alabama </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/streets"/> 
                    <meta name="description" content="Huntsville Alabama is awesome. From a secret art walk on the streets to some activities for the family Huntsville won't dissapoint." />
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
                                {this.state.index === 0 ? null
                                : <div className="video-thumbnail-wrapper">
                                    <div onClick={this.playArt} className="thumbnail-container">
                                        <img onClick={this.playArt} src={artThumbnail} className="video-thumbnail" alt="Downtown Huntsville Secret Art Walk"/>
                                        <div className="thumbnail-hover">
                                            <i className="material-icons">play_arrow</i>
                                            <p> Play Video </p>
                                        </div>
                                    </div>
                                    <p className="small-video-header"> Huntsville Secret Art Walk </p>
                                    <div className="video-line"></div>
                                </div> }

                                {this.state.index === 1 ? null
                                : <div className="video-thumbnail-wrapper">
                                    <div onClick={this.playBotanical} className="thumbnail-container">
                                        <img onClick={this.playBotanical} src={botanicalThumbnail} className="video-thumbnail" alt="Botanical Gardens"/>
                                        <div className="thumbnail-hover">
                                            <i className="material-icons">play_arrow</i>
                                            <p> Play Video </p>
                                        </div>
                                    </div>
                                    <p className="small-video-header"> Botanical Gardens </p>
                                    <div className="video-line"></div>
                                </div> }

                                {this.state.index === 2 ? null :
                                <div className="video-thumbnail-wrapper">
                                    <div onClick={this.playBullet} className="thumbnail-container">
                                        <img onClick={this.playBullet} src={bulletThumbnail} className="video-thumbnail" alt="Bullet & Barrel"/>
                                        <div className="thumbnail-hover">
                                            <i className="material-icons">play_arrow</i>
                                            <p> Play Video </p>
                                        </div>
                                    </div>
                                    <p className="small-video-header"> Bullet & Barrel </p>
                                    <div className="video-line"></div>
                                </div> }                                                      
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

export default Streets;
