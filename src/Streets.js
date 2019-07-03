import React from 'react';
import ArtTrail from './activities/ArtTrail';
import Bullet from './activities/Bullet';
import Gardens from './activities/Gardens';
import TrashPandas from './videos/TrashPandas';
import WomanChangeTheWorld from './videos/WomanChangeTheWorld';
import LongestPi from './videos/LongestPi';
import CrushWineFestival from './videos/CrushWineFestival';
import { Helmet } from 'react-helmet';
import './css/streets.css';

class Streets extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div className="streets-page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Best Activities in Huntsville Alabama </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/streets"/>
                    <meta name="description" content="Huntsville Alabama is awesome. From a secret art walk on the streets to some activities for the family Huntsville won't dissapoint." />
                </Helmet>
                <div className="streets-header-container">
                    <h1 className="streets-header" id="streets-header"> Streets </h1> <h1 className="streets-header"> Beats & Eats </h1>
                </div>

                <div className="streets-video-holder">
                    <TrashPandas />
                    <WomanChangeTheWorld />
                    <LongestPi />
                    <CrushWineFestival />
                </div>
                <h2 className="fav-activities-header"> Our Favorite Activities </h2>
                <div className="streets-things-wrapper">
                    <ArtTrail />
                    <Bullet />
                    <Gardens />
                </div>
            </div>
        )
    }
} 

export default Streets;