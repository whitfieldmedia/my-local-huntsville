import React from 'react';
import Brickhouse from './bars/Brickhouse';
import BrokenEgg from './restaurants/BrokenEgg';
import Boot from './restaurants/Boot';
import Straight from './bars/Straight';
import Yellowhammer from './bars/Yellowhammer';
import Btr from './bars/Btr';
import './css/eats.css'

class Eats extends React.Component{
    render() {
        return (
            <div className="eats-page">
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