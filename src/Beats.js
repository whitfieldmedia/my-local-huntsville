import React from 'react';
import Bar805 from './whitfieldVideos/Bar805';
import Bar805Mobile from './whitfieldVideos/Bar805Mobile';
import Otbx from './whitfieldVideos/Otbx';
import OtbxMobile from './whitfieldVideos/OtbxMobile';
import PoppyMobile from './whitfieldVideos/PoppyMobile'
import Poppy from './whitfieldVideos/Poppy';
import OpenBottle from './whitfieldVideos/OpenBottle';
import OpenBottleMobile from './whitfieldVideos/OpenBottleMobile';
import { Helmet } from 'react-helmet';
import poppyThumbnail from './whitfieldVideos/thumbnails/poppy.png';
import otbxThumbnail from './whitfieldVideos/thumbnails/otbx.png';
import barThumbnail from './whitfieldVideos/thumbnails/bar-at-805.png';
import openBottleThumbnail from './whitfieldVideos/thumbnails/openBottle.png';
import BrassTap from './whitfieldVideos/BrassTap';
import BrassTapMobile from './whitfieldVideos/BrassTapMobile';
import BrassTapThumbnail from './whitfieldVideos/thumbnails/brassTap.png';
import bannerTall from './bannerAd/raypearman_tall.svg';
import bannerMobile from './bannerAd/rpearman_mobile.svg';
import './css/streets.css';

class Beats extends React.Component{
    constructor() {
        super()
        this.state = {
            isLoaded: false,
            videos: [
                <OpenBottle />,
                <BrassTap />,
                <Poppy />,
                <Otbx />,
                <Bar805 />
            ],
            videosMobile: [
                <OpenBottleMobile />,
                <BrassTapMobile />,
                <PoppyMobile />,
                <OtbxMobile />,
                <Bar805Mobile />
            ],
            index: 0,
            width: window.width
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    findVideo = () => {
        window.scrollTo(0,0);
        if(window.innerWidth > 500) {
            return this.state.videos[this.state.index];
        } else {
            return this.state.videosMobile[this.state.index];
        }
    }
    playOpenBottle = () => {
        this.setState({ index: 0 })
        this.findVideo();
    }
    playBrassTap = () => {
        this.setState({ index: 1 })
        this.findVideo();
    }
    playPoppy = () => {
        this.setState({ index: 2 });
        this.findVideo()
    }
    playOtbx = () => {
        this.setState({ index: 3 });
        this.findVideo()
    }
    playBar805 = () => {
        this.setState({ index: 4 });
        this.findVideo()
    }
    render() { 
        if(this.state.isLoaded) {
            console.log(this.props.events.resultsPage.results.event.map(res => res));
        }
        return(
            <div className="seb-page">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> Beats in Huntsville, Alabama </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/beats"/>
                    <meta name="description" content="Looking to have a fun night in Huntsville? Here are the best bars that have live music and upcoming concerts." />
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
                                {this.state.index === 0 ? null : 
                                <div className="video-thumbnail-wrapper">
                                    <div onClick={this.playOpenBottle} className="thumbnail-container">
                                        <img onClick={this.playOpenBottle} className="video-thumbnail" src={openBottleThumbnail} alt="The Open Bottle"/>
                                        <div className="thumbnail-hover">
                                            <i className="material-icons"> play_arrow </i>
                                            <p> Play Video</p>
                                        </div>
                                    </div>
                                    <p className="small-video-header"> The Open Bottle </p>
                                    <div className="video-line"></div>
                                </div>
                                }
                                {this.state.index === 1 ? null : 
                                <div onClick={this.playBrassTap} className="video-thumbnail-wrapper">
                                    <div className="thumbnail-container">
                                        <img onClick={this.playBrassTap} className="video-thumbnail" src={BrassTapThumbnail} alt="The Brass Tap"/>
                                        <div className="thumbnail-hover">
                                            <i className="material-icons">play_arrow</i>
                                            <p> Play Video </p>
                                        </div>
                                    </div>
                                    <p className="small-video-header"> The Brass Tap </p>
                                    <div className="video-line"></div>
                                </div>
                                }
                                {this.state.index === 2 ? null : 
                                <div className="video-thumbnail-wrapper">
                                    <div onClick={this.playPoppy} className="thumbnail-container">
                                        <img onClick={this.playPoppy} className="video-thumbnail" src={poppyThumbnail} alt="The Poppy"/>
                                        <div className="thumbnail-hover">
                                            <i className="material-icons">play_arrow</i>
                                            <p> Play Video </p>
                                        </div>
                                    </div>
                                    <p className="small-video-header"> The Poppy </p>
                                    <div className="video-line"></div>
                                </div> }
                                {this.state.index === 3 ? null : 
                                <div className="video-thumbnail-wrapper">
                                    <div onClick={this.playOtbx} className="thumbnail-container">
                                        <img onClick={this.playOtbx} className="video-thumbnail" src={otbxThumbnail} alt="Old Town Beer Exchange"/>
                                        <div className="thumbnail-hover">
                                            <i className="material-icons">play_arrow</i>
                                            <p> Play Video </p>
                                        </div>
                                    </div>
                                    <p className="small-video-header"> Old Town Beer Exchange </p>
                                    <div className="video-line"></div>
                                </div> }
                                {this.state.index === 4 ? null : 
                                <div className="video-thumbnail-wrapper">
                                    <div onClick={this.playBar805} className="thumbnail-container">
                                        <img onClick={this.playBar805} className="video-thumbnail" src={barThumbnail} alt="Bar at 805"/>
                                        <div className="thumbnail-hover">
                                            <i className="material-icons">play_arrow</i>
                                            <p> Play Video </p>
                                        </div>
                                    </div>
                                    <p className="small-video-header"> The Bar at 805 </p>
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

export default Beats;   