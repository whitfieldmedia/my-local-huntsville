import React from 'react';
import BrokenEgg from './whitfieldVideos/BrokenEgg';
import Yellowhammer from './whitfieldVideos/Yellowhammer';
import Btr from './whitfieldVideos/Btr';
import Waltons from './whitfieldVideos/Waltons';
import BrokenEggMobile from './whitfieldVideos/BrokenEggMobile';
import YellowhammerMobile from './whitfieldVideos/YellowhammerMobile';
import BtrMobile from './whitfieldVideos/BtrMobile';
import WaltonsMobile from './whitfieldVideos/WaltonsMobile';
import eggThumbnail from './whitfieldVideos/thumbnails/brokenEgg.png';
import btrThumbnail from './whitfieldVideos/thumbnails/btr.png';
import waltonThumbnail from './whitfieldVideos/thumbnails/waltons.png';
import yellowThumbnail from './whitfieldVideos/thumbnails/yellowhammer.png';
import BrassTap from './whitfieldVideos/BrassTap';
import BrassTapMobile from './whitfieldVideos/BrassTapMobile';
import BrassTapThumbnail from './whitfieldVideos/thumbnails/brassTap.png';
import Dickys from './whitfieldVideos/Dickys'
import DickysMobile from './whitfieldVideos/DickysMobile'
import DickysThumbnail from './whitfieldVideos/thumbnails/dickys_thumbnail.png'
import { Helmet } from 'react-helmet';
import './css/streets.css'

class Eats extends React.Component{
    constructor() {
        super();
        this.state = {
            videos: [
                <Dickys />,
                <BrassTap />,
                <Waltons />,
                <BrokenEgg />,
                <Yellowhammer />,
                <Btr />
            ],
            videosMobile: [
                <DickysMobile />,
                <BrassTapMobile />,
                <WaltonsMobile />,
                <BrokenEggMobile />,
                <YellowhammerMobile />,
                <BtrMobile />
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
    playDickys = () => {
        this.setState({ index: 0 })
        this.findVideo();
    }
    playBrassTap = () => {
        this.setState({ index: 1 })
        this.findVideo();
    }
    playWalton = () => {
        this.setState({ index: 2 })
        this.findVideo();
    }
    playEgg = () => {
        this.setState({ index: 3 })
        this.findVideo();
    }
    playYellow = () => {
        this.setState({ index: 4 })
        this.findVideo();
    }
    playBtr = () => {
        this.setState({ index: 5 })
        this.findVideo();
    }
    render() {
        return (
            <div className="seb-page">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> Best Food in Huntsville | My Local Huntsville </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/food" />
                    <meta name="description" content="Huntsville Alabama has a ton of good places to eat. Whether you want some breakfast or are looking to watch a football game with some good wings and beer we have you covered." />
                </Helmet>
                <div className="seb-row">
                    <div className="seb-left-column">
                        <div className="main-video-container">
                            {this.findVideo()}
                        </div>
                        <div className="seb-right-column">
                            <div className="video-thumbnail-container">
                                {this.state.index === 0 ? null : 
                                <div onClick={this.playDickys} className="video-thumbnail-wrapper">
                                    <div className="thumbnail-container">
                                        <img onClick={this.playDickys} className="video-thumbnail" src={DickysThumbnail} alt="Dickey's Barbecue Pit"/>
                                        <div className="thumbnail-hover">
                                            <i className="material-icons">play_arrow</i>
                                            <p> Play Video </p>
                                        </div>
                                    </div>
                                    <p className="small-video-header"> Dickey's Barbecue </p>
                                    <div className="video-line">  </div>
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
                                    <div className="video-line">  </div>
                                </div>
                                }
                                {this.state.index === 2 ? null :
                                <div onClick={this.playWalton} className="video-thumbnail-wrapper">
                                    <div className="thumbnail-container">
                                        <img onClick={this.playWalton} src={waltonThumbnail} className="video-thumbnail" alt="Waltons"/>
                                        <div className="thumbnail-hover">
                                            <i className="material-icons">play_arrow</i>
                                            <p> Play Video </p>
                                        </div>
                                    </div>
                                    <p className="small-video-header"> Walton's Sourthen Table </p>
                                    <div className="video-line">  </div>
                                </div> }

                                {this.state.index === 3 ? null :
                                <div className="video-thumbnail-wrapper">
                                    <div onClick={this.playEgg} className="thumbnail-container">
                                        <img onClick={this.playEgg} src={eggThumbnail} className="video-thumbnail" alt="Another Broken Egg"/>
                                        <div className="thumbnail-hover">
                                            <i className="material-icons">play_arrow</i>
                                            <p> Play Video </p>
                                        </div>
                                    </div>
                                    <p className="small-video-header"> Another Broken Egg </p>
                                    <div className="video-line"></div>
                                </div> }

                                {this.state.index === 4 ? null :
                                <div className="video-thumbnail-wrapper">
                                    <div onClick={this.playYellow} className="thumbnail-container">
                                        <img onClick={this.playYellow} src={yellowThumbnail} className="video-thumbnail" alt="Yellowhammer Earth & Stone"/>
                                        <div className="thumbnail-hover">
                                            <i className="material-icons">play_arrow</i>
                                            <p> Play Video </p>
                                        </div>
                                    </div>
                                    <p className="small-video-header"> Yellowhammer Earth & Stone </p>
                                    <div className="video-line"></div>
                                </div> }

                                {this.state.index === 5 ? null 
                                :                                                                  
                                <div className="video-thumbnail-wrapper">
                                    <div onClick={this.playBtr} className="thumbnail-container">
                                        <img onClick={this.playBtr} src={btrThumbnail} className="video-thumbnail" alt="Below The Radar"/>
                                        <div className="thumbnail-hover">
                                            <i className="material-icons">play_arrow</i>
                                            <p> Play Video </p>
                                        </div>
                                    </div>
                                    <p className="small-video-header"> Below the Radar </p>
                                    <div className="video-line"></div>
                                </div> }                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Eats;