import React from 'react';
import ArtTrail from './activities/ArtTrail';
import Bullet from './activities/Bullet';
import Gardens from './activities/Gardens';
import './css/streets.css';
import { Helmet } from 'react-helmet';

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
                <h1 className="streets-header"> Streets </h1>
                <div className="streets-video-holder">
                    <iframe className="home-video" title="Trash Pandas' Uniform Unveiling" src="https://player.vimeo.com/video/344604925" frameborder="0" allowFullScreen></iframe>
                    <iframe className="home-video" title="Woman Can Change the World" src="https://player.vimeo.com/video/344846982" frameborder="0" allowFullScreen></iframe>
                    <iframe className="home-video" title="MCS Moores Mill School Longest Human Pi Chain" src="https://player.vimeo.com/video/323832818" frameborder="0" allowFullScreen></iframe>
                    <iframe className="home-video" title="Crush Wine Festival Press Conference" src="https://player.vimeo.com/video/344874010" frameborder="0" allowFullScreen></iframe>
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