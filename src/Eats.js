import React from 'react';
import Brickhouse from './bars/Brickhouse';
import BrokenEgg from './restaurants/BrokenEgg';
import Boot from './restaurants/Boot';
import Straight from './bars/Straight';
import Yellowhammer from './bars/Yellowhammer';
import Btr from './bars/Btr';
import './css/eats.css'
import { Helmet } from 'react-helmet';

class Eats extends React.Component{
    render() {
        return (
            <div className="eats-page">
                <Helmet>
                    <meta charSet="urt-8"/>
                    <title> Our favorite places to eat in Huntsville. </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/eats" />
                    <meta name="description" content="Huntsville Alabama has a ton of good places to eat. Whether you want some breakfast or are looking to watch a football game with some good wings and beer we have you covered." />
                </Helmet>
                <h1 className="eats-header"> Our Favorite Eats </h1>
                <div className="eats-partner-wrapper">
                    <Brickhouse />
                    <BrokenEgg />
                    <Boot />
                    <Straight />
                    <Yellowhammer />
                    <Btr />
                </div>
            </div>
        )
    }
}
export default Eats;