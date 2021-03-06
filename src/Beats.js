import React from 'react';
import Bar805 from './whitfieldVideos/Bar805';
import Bar805Mobile from './whitfieldVideos/Bar805Mobile';
import Otbx from './whitfieldVideos/Otbx';
import OtbxMobile from './whitfieldVideos/OtbxMobile';
import PoppyMobile from './whitfieldVideos/PoppyMobile'
import Poppy from './whitfieldVideos/Poppy';
import { Helmet } from 'react-helmet';
import poppyThumbnail from './whitfieldVideos/thumbnails/poppy.png';
import otbxThumbnail from './whitfieldVideos/thumbnails/otbx.png';
import barThumbnail from './whitfieldVideos/thumbnails/bar-at-805.png';
import BrassTap from './whitfieldVideos/BrassTap';
import BrassTapMobile from './whitfieldVideos/BrassTapMobile';
import BrassTapThumbnail from './whitfieldVideos/thumbnails/brassTap.png';
import './css/streets.css';

class Beats extends React.Component{
    constructor() {
        super()
        this.state = {
            isLoaded: false,
            videos: [
                <BrassTap />,
                <Poppy />,
                <Otbx />,
                <Bar805 />
            ],
            videosMobile: [
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
    playBrassTap = () => {
        this.setState({ index: 0 })
        this.findVideo();
    }
    playPoppy = () => {
        this.setState({ index: 1 });
        this.findVideo()
    }
    playOtbx = () => {
        this.setState({ index: 2 });
        this.findVideo()
    }
    playBar805 = () => {
        this.setState({ index: 3 });
        this.findVideo()
    }
    render() { 
        return(
            <div className="seb-page">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> 
                        Best Bars in Huntsville | My Local Huntsville 
                    </title>
                    <link rel="canonical" 
                        href="https://www.mylocalhuntsville.com/bars"/>
                    <meta name="description" 
                        content="Looking to have a fun night in Huntsville? Here are the best bars that have live music and upcoming concerts." />
                </Helmet>
                <div className="seb-row">
                    <div className="seb-left-column">
                        <div className="main-video-container">
                            {this.findVideo()}
                        </div>
                        <div className="seb-right-column">
                            <div className="video-thumbnail-container">
                                {this.state.index === 0 ? null : 
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
                                {this.state.index === 1 ? null : 
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
                                {this.state.index === 2 ? null : 
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
                                {this.state.index === 3 ? null : 
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
                </div>
            </div>
        )
    }
}

export default Beats;   