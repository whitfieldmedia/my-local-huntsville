import React from 'react';
import Brickhouse from './bars/Brickhouse';
import BrokenEgg from './restaurants/BrokenEgg';
import Boot from './restaurants/Boot';
import Straight from './bars/Straight';
import Yellowhammer from './bars/Yellowhammer';
import Btr from './bars/Btr';
import Waltons from './restaurants/Waltons';
import UrbanCookhouse from './videos/UrbanCookhouse';
import { Helmet } from 'react-helmet';
import eatsLogo from './icons/seb_eats_white.svg';
import './css/eats.css'

class Eats extends React.Component{
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div className="eats-page">
                <Helmet>
                    <meta charSet="urt-8"/>
                    <title> Our favorite places to eat in Huntsville. </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/eats" />
                    <meta name="description" content="Huntsville Alabama has a ton of good places to eat. Whether you want some breakfast or are looking to watch a football game with some good wings and beer we have you covered." />
                </Helmet>
                <div className="eats-header-container">
                    {/* <h1 className="eats-header"> Streets Beats & </h1> <h1 className="eats-header" id="purple">Eats</h1> */}
                    <img src={eatsLogo} className="seb-logo" alt="Streets Beats and Eats"/>
                </div>
                <div className="eats-video-wrapper">
                    <UrbanCookhouse />
                </div>
                {/* <h1 className="eats-header"> Some more great Eats </h1> */}
                <div className="eats-partner-wrapper">
                    <Brickhouse />
                    <BrokenEgg />
                    <Boot />
                    <Straight />
                    <Yellowhammer />
                    <Btr />
                    <Waltons />
                </div>
            </div>
        )
    }
}
export default Eats;