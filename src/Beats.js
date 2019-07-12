import React from 'react';
import Bar805 from './whitfieldVideos/Bar805';
import Bar805Mobile from './whitfieldVideos/Bar805Mobile';
import Otbx from './whitfieldVideos/Otbx';
import OtbxMobile from './whitfieldVideos/OtbxMobile';
import PoppyMobile from './whitfieldVideos/PoppyMobile'
import Poppy from './whitfieldVideos/Poppy';
import Rhapsody from './videos/Rhapsody';
import RhapsodyMobile from './videos/RhapsodyMobile';
import FarmersMarket from './videos/FarmersMarket';
import FarmersMarketMobile from './videos/FarmersMarketEvent';
import ValueOfArts from './videos/ValueOfArts';
import ValueOfArtsMobile from './videos/ValueOfArtsMobile';
import { Helmet } from 'react-helmet';
import beatsLogo from './icons/beatsLogo.svg';
import farmersThumbnail from './videos/thumbnails/farmersMarket.png';
import rhapsodyThumbnail from './videos/thumbnails/rhapsody.png';
import artsThumbnail from './videos/thumbnails/value-of-arts.png';
import poppyThumbnail from './whitfieldVideos/thumbnails/poppy.png';
import otbxThumbnail from './whitfieldVideos/thumbnails/otbx.png';
import barThumbnail from './whitfieldVideos/thumbnails/bar-at-805.png';
import bannerTall from './bannerAd/raypearman_tall.svg';
import bannerMobile from './bannerAd/rpearman_mobile.svg';
import './css/streets.css';

class Beats extends React.Component{
    constructor() {
        super()
        this.state = {
            isLoaded: false,
            videos: [
                <Rhapsody />,
                <ValueOfArts />,
                <FarmersMarket />,
                <Poppy />,
                <Otbx />,
                <Bar805 />
            ],
            videosMobile: [
                <RhapsodyMobile />,
                <ValueOfArtsMobile />,
                <FarmersMarketMobile />,
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
    playRhapsody = () => {
        this.setState({ index: 0 });
        this.findVideo()
    }
    playArts = () => {
        this.setState({ index: 1 });
        this.findVideo()
    }
    playFarmers = () => {
        this.setState({ index: 2 });
        this.findVideo()
    }
    playPoppy = () => {
        this.setState({ index: 3 });
        this.findVideo()
    }
    playOtbx = () => {
        this.setState({ index: 4 });
        this.findVideo()
    }
    playBar805 = () => {
        this.setState({ index: 5 });
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
                        <div className="seb-header-container">
                            <img src={beatsLogo} className="seb-logo" alt="Streets Beats and Eats"/>
                        </div>
                        <div className="main-video-container">
                            {this.findVideo()}
                        </div>
                    </div>
                    <div className="seb-right-column">
                        <div className="video-thumbnail-container">
                            <div className="mobile-banner">
                                <img src={bannerMobile} alt="Ray Pearman Lincoln "/>
                            </div>
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playRhapsody} className="thumbnail-container">
                                    <img onClick={this.playRhapsody} className="video-thumbnail" src={rhapsodyThumbnail} alt="The Rhapsody Jazz Cafe with Kim Scott"/>
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> The Rhapsody Jazz Cafe with Kim Scott </p>
                                <div className="video-line"></div>
                            </div>
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playArts} className="thumbnail-container">
                                    <img onClick={this.playArts} className="video-thumbnail" src={artsThumbnail} alt="Value of the Arts with Mario Maitland"/>
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> The Value of the Arts with Mario Maitland </p>
                                <div className="video-line"></div>
                            </div>
                            <div className="video-thumbnail-wrapper">
                                <div onClick={this.playFarmers} className="thumbnail-container">
                                    <img onClick={this.playFarmers} className="video-thumbnail" src={farmersThumbnail} alt="Mid City Farmer's Market"/>
                                    <div className="thumbnail-hover">
                                        <i className="material-icons">play_arrow</i>
                                        <p> Play Video </p>
                                    </div>
                                </div>
                                <p className="small-video-header"> Mid City Farmer's Market </p>
                                <div className="video-line"></div>
                            </div>
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
                            </div>
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
                            </div>
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
                            </div>                                                                                                                                            
                        </div>
                    </div>
                    <div className="banner-column">
                        <img src={bannerTall} alt="rayPearmanBanner"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Beats;   