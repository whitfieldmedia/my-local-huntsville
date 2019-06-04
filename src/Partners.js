import React from 'react';
import Poppy from './bars/Poppy';
import Bar805 from './bars/Bar805';
import Brickhouse from './bars/Brickhouse';
import Btr from './bars/Btr';
import Otbx from './bars/Otbx';
import Straight from './bars/Straight';
import Yellowhammer from './bars/Yellowhammer';
import ArtTrail from './activities/ArtTrail';
import Bullet from './activities/Bullet';
import Gardens from './activities/Gardens';
import BrokenEgg from './restaurants/BrokenEgg';
import Boot from './restaurants/Boot';
import './css/partners.css';

class Partners extends React.Component{
    constructor() {
        super()
        this.state = {
            res: false,
            bars: false,
            fun: false,
            all: true
        }
    }
    showRes = () => {
        this.setState({
            res: true,
            bars: false,
            fun: false,
            all: false
        })
    }
    showBars = () => {
        this.setState({
            res: false,
            bars: true,
            fun: false,
            all: false
        })
    }
    showFun = () => {
        this.setState({
            res: false,
            bars: false,
            fun: true,
            all: false
        })
    }
    showAll = () => {
        this.setState({
            res: false,
            bars: false,
            fun: false,
            all: true
        })
    }
    render() {
        return (
            <div>
                <div id="top-image" className="all"></div>
                <div className="header-wrapper">
                    <h1 className="header1"> OUR PARTNERS </h1>
                </div>
                <div className="display-wrapper">
                    <div className="display" id="all" onClick={this.showAll}> Show All </div>
                    <div className="smallLine"></div>
                    <div className="display" id="resturants" onClick={this.showRes}> Resturants </div>
                    <div className="smallLine"></div>
                    <div className="display" id="breweries" onClick={this.showBars}> Breweries & Bars </div>
                    <div className="smallLine"></div>
                    <div className="display" id="shooting" onClick={this.showFun}> Activities </div>
                </div>
                <div className="partners-top">
                    {this.state.all 
                    ? 
                    <div className="partner-wrapper">
                        <Bullet />
                        <Poppy />
                        <Straight />
                        <Gardens />
                        <Boot />
                        <Btr />
                        <Otbx />
                        <ArtTrail />
                        <BrokenEgg />
                        <Bar805 />
                        <Yellowhammer />
                        <Brickhouse />
                    </div>
                    :null}
                    {this.state.bars 
                    ? 
                    <div className="partner-wrapper">
                        <Poppy />
                        <Straight />
                        <Btr />
                        <Otbx />
                        <Bar805 />
                        <Yellowhammer />
                        <Brickhouse />
                    </div>
                    : null}
                    {this.state.fun 
                    ? 
                    <div className="partner-wrapper">
                        <Bullet />
                        <Gardens />
                        <ArtTrail />
                    </div>
                    : null}
                    {this.state.res 
                    ? 
                    <div className="partner-wrapper">
                        <Btr />
                        <BrokenEgg />
                        <Boot />
                        <Yellowhammer />
                        <Straight />
                        <Brickhouse />
                    </div>
                    : null}
                </div>
            </div>
        )
    }
}

export default Partners;