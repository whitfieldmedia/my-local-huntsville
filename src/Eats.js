import React from 'react';
import Brickhouse from './whitfieldVideos/Brickhouse';
import BrokenEgg from './whitfieldVideos/BrokenEgg';
import Boot from './whitfieldVideos/Boot';
import Straight from './whitfieldVideos/Straight';
import Yellowhammer from './whitfieldVideos/Yellowhammer';
import Btr from './whitfieldVideos/Btr';
import Waltons from './whitfieldVideos/Waltons';
import UrbanCookhouse from './videos/UrbanCookhouse';
import urbanThumbnail from './videos/thumbnails/urban.png';
import bootThumbnail from './whitfieldVideos/thumbnails/boot.png'
import brickThumbnail from './whitfieldVideos/thumbnails/brickhouse.png';
import eggThumbnail from './whitfieldVideos/thumbnails/brokenEgg.png';
import btrThumbnail from './whitfieldVideos/thumbnails/btr.png';
import waltonThumbnail from './whitfieldVideos/thumbnails/waltons.png';
import straightThumbnail from './whitfieldVideos/thumbnails/straight-to-ale.png';
import yellowThumbnail from './whitfieldVideos/thumbnails/yellowhammer.png';
import { Helmet } from 'react-helmet';
import eatsLogo from './icons/seb_eats_white.svg';
import './css/streets.css'

class Eats extends React.Component{
    constructor() {
        super();
        this.state = {
            videos: [
                <UrbanCookhouse />,
                <Waltons />,
                <Brickhouse />,
                <BrokenEgg />,
                <Boot />,
                <Straight />,
                <Yellowhammer />,
                <Btr />
            ],
            index: 0
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    findVideo = () => {
        return this.state.videos[this.state.index];
    }
    playUrban = () => {
        this.setState({ index: 0 })
        this.findVideo();
    }
    playWalton = () => {
        this.setState({ index: 1 })
        this.findVideo();
    }
    playBrickhouse = () => {
        this.setState({ index: 2 })
        this.findVideo();
    }
    playEgg = () => {
        this.setState({ index: 3 })
        this.findVideo();
    }
    playBoot = () => {
        this.setState({ index: 4 })
        this.findVideo();
    }
    playStraight = () => {
        this.setState({ index: 5 })
        this.findVideo();
    }
    playYellow = () => {
        this.setState({ index: 6 })
        this.findVideo();
    }
    playBtr = () => {
        this.setState({ index: 7 })
        this.findVideo();
    }
    render() {
        return (
            <div className="seb-page">
                <Helmet>
                    <meta charSet="urt-8"/>
                    <title> Our favorite places to eat in Huntsville. </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/eats" />
                    <meta name="description" content="Huntsville Alabama has a ton of good places to eat. Whether you want some breakfast or are looking to watch a football game with some good wings and beer we have you covered." />
                </Helmet>
                <div className="seb-row">
                    <div className="seb-left-column">
                        <div className="seb-header-container">
                            <img src={eatsLogo} className="seb-logo" alt="Streets Beats and Eats"/>
                        </div>
                        <div className="main-video-container">
                            {this.findVideo()}
                        </div>
                    </div>
                    <div className="seb-right-column">
                        <div className="video-thumbnail-container">
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playUrban} className="thumbnail-container">
                                    <img onClick={this.playUrban} src={urbanThumbnail} className="video-thumbnail" alt="Urban Cookhouse"/>
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> Eating Local With Urban Cookhouse </p>
                                <div className="video-line"></div>
                            </div>
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
                            </div>
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playBrickhouse} className="thumbnail-container">
                                    <img onClick={this.playBrickhouse} src={brickThumbnail} className="video-thumbnail" alt="Brickhouse Sports Cafe"/>
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> Brickhouse Sports Cafe </p>
                                <div className="video-line"></div>
                            </div>
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
                            </div>         
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playBoot} className="thumbnail-container">
                                    <img onClick={this.playBoot} src={bootThumbnail} className="video-thumbnail" alt="Boot Pizzeria"/>
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> The Boot Pizzeria </p>
                                <div className="video-line"></div>
                            </div>
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playStraight} className="thumbnail-container">
                                    <img onClick={this.playStraight} src={straightThumbnail} className="video-thumbnail" alt="Straight To Ale"/>
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> Straight to Ale </p>
                                <div className="video-line"></div>
                            </div>
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
                            </div>                                                                                                                                                               
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
                            </div>                         
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Eats;