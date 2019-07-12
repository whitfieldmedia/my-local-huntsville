import React from 'react';
import ArtWalk from './whitfieldVideos/ArtWalk';
import Bullet from './whitfieldVideos/Bullet';
import Gardens from './whitfieldVideos/Gardens';
import TrashPandas from './videos/TrashPandas';
import WomanChangeTheWorld from './videos/WomanChangeTheWorld';
import LongestPi from './videos/LongestPi';
import CrushWineFestival from './videos/CrushWineFestival';
import FarmersMarket from './videos/FarmersMarket';
import Cfd from './videos/CFD';
import HairQueen from './videos/HairQueen';
import { Helmet } from 'react-helmet';
import sebLogo from './icons/streetsLogo.svg';
import trashPandasThumbnail from './videos/thumbnails/trashPandas.png';
import farmersMarketThumbnail from './videos/thumbnails/farmersMarket.png';
import womanChangeThumbnail from './videos/thumbnails/womanChange.png';
import mcsPiThumbnail from './videos/thumbnails/mcsPi.png';
import crushThumbnail from './videos/thumbnails/crushWine.png';
import hairThumbnail from './videos/thumbnails/hairQueen.png';
import cfdThumbnail from './videos/thumbnails/cfd.png';
import artThumbnail from './whitfieldVideos/thumbnails/artWalk.png';
import botanicalThumbnail from './whitfieldVideos/thumbnails/botanicalGardens.png';
import bulletThumbnail from './whitfieldVideos/thumbnails/bulletBarrel.png';
import bannerTall from './bannerAd/raypearman_tall.svg';
import './css/streets.css';

class Streets extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: [
                <FarmersMarket />,
                <TrashPandas />,
                <WomanChangeTheWorld />,
                <LongestPi />,
                <CrushWineFestival />,
                <HairQueen />,
                <Cfd />,
                <ArtWalk />,
                <Gardens />,
                <Bullet />
            ],
            index: 0
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    findVideo = () => {
        window.scrollTo(0,50);
        return this.state.videos[this.state.index]
    }
    playFarmers = () => {
        this.setState({ index: 0 })
        this.findVideo();
    }
    playTrash = () => {
        this.setState({ index: 1 })
        this.findVideo();
    }
    playWoman = () => {
        this.setState({ index: 2 })
        this.findVideo();
    }
    playPi = () => {
        this.setState({ index: 3})
        this.findVideo();
    }
    playCrush = () => {
        this.setState({ index: 4})
        this.findVideo();
    }
    playHair = () => {
        this.setState({ index: 5})
        this.findVideo();
    }
    playCfd = () => {
        this.setState({ index: 6})
        this.findVideo();
    }
    playArt = () => {
        this.setState({ index: 7 })
        this.findVideo()
    }
    playBotanical = () => {
        this.setState({ index: 8 })
        this.findVideo()
    }
    playBullet = () => {
        this.setState({ index: 9 })
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
                        <div className="seb-header-container">
                            <img src={sebLogo} className="seb-logo" alt="Streets Eats & Beats"/>
                        </div>
                        <div className="main-video-container">
                            {this.findVideo()}
                        </div>
                    </div>
                    <div className="seb-right-column">
                        <div className="video-thumbnail-container">
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playFarmers} className="thumbnail-container">
                                    <img src={farmersMarketThumbnail} className="video-thumbnail" alt="Mid City Farmers Market"/>
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> Mid City Farmers Market </p>
                                <div className="video-line"></div>
                            </div>
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playTrash} className="thumbnail-container">
                                    <img src={trashPandasThumbnail} className="video-thumbnail" alt="Trash Pandas"/>
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> Trash Panda's Uniform Unveiling </p>
                                <div className="video-line"></div>
                            </div>

                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playWoman} className="thumbnail-container">
                                    <img onClick={this.playWoman} src={womanChangeThumbnail} className="video-thumbnail" alt="Woman Can Change the World"/>
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> Woman can Change the World </p>
                                <div className="video-line"></div>
                            </div>
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playPi} className="thumbnail-container">
                                    <img src={mcsPiThumbnail} className="video-thumbnail" alt="Mcs Moores School Longest Human Pi Chain"/>
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> MCS Moores Mill School Longest Human Pi Chain </p>
                                <div className="video-line"></div>
                            </div>
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playCrush} className="thumbnail-container">
                                    <img src={crushThumbnail} className="video-thumbnail" alt="Crush Wine Festival" />
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> Crush Wine Festival </p>
                                <div className="video-line"></div>
                            </div>
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playHair} className="thumbnail-container">
                                    <img src={hairThumbnail} className="video-thumbnail" alt="Hair Beauty Queen" />
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> Hair Queen Beauty Ribbon Cutting </p>
                                <div className="video-line"></div>
                            </div>
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playCfd} className="thumbnail-container">
                                    <img onClick={this.playCfd} src={cfdThumbnail} className="video-thumbnail" alt="CFD Ribbon Cutting" />
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> CFD Research Corporation's Ribbon Cutting </p>
                                <div className="video-line"></div>
                            </div>
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playArt} className="thumbnail-container">
                                    <img onClick={this.playArt} src={artThumbnail} className="video-thumbnail" alt="Downtown Huntsville Secret Art Walk"/>
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> Huntsville Secret Art Walk </p>
                                <div className="video-line"></div>
                            </div>
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playBotanical} className="thumbnail-container">
                                    <img onClick={this.playBotanical} src={botanicalThumbnail} className="video-thumbnail" alt="Botanical Gardens"/>
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> Botanical Gardens </p>
                                <div className="video-line"></div>
                            </div>
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
                            </div>                                                      
                        </div>
                    </div>
                    <div class="banner-column">
                        <img src={bannerTall} alt="rayPearmanBanner"/>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Streets;
