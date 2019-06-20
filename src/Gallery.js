import React from 'react';
import './css/gallery.css';
import { Helmet } from 'react-helmet';
import animalFountain from './ashleyPhotos/animal_fountain.png';
import apartments from './ashleyPhotos/apartments.png';
import banditoBurrito from './ashleyPhotos/bandito_burrito_co.png';
import baseball from './ashleyPhotos/baseball.png';
import bigSpring from './ashleyPhotos/big_springs_park.png';
import clintonRow from './ashleyPhotos/clinton_row.jpg';
import diners from './ashleyPhotos/diners.png';
import food from './ashleyPhotos/food.png';
import guitar from './ashleyPhotos/guitar_black_white.jpg';
import hotAirBaloon from './ashleyPhotos/hot_air_baloon.png';
import hsvRunway from './ashleyPhotos/hsv_runway.png';
import jeffSt from './ashleyPhotos/jeff_st.png';
import jeffSt2 from './ashleyPhotos/jeff_st2.png';
import jeffSt3 from './ashleyPhotos/jefferson_st.png';
import lakeSunset from './ashleyPhotos/lake_sunset.png';
import lakeView from './ashleyPhotos/lake_view.png';
import lights from './ashleyPhotos/lights.png';
import loweMill from './ashleyPhotos/lowe_mill.png';
import pond from './ashleyPhotos/pond.png';
import singing from './ashleyPhotos/singing.jpg';
import soldierStatue from './ashleyPhotos/soldier_statue.png';
import stars from './ashleyPhotos/stars.png';
import stream from './ashleyPhotos/stream.png';
import streetExposure from './ashleyPhotos/street_exposure.png';
import tree from './ashleyPhotos/tree.png';
import usaRocket from './ashleyPhotos/usa_rocket.png';
import wallArt from './ashleyPhotos/wall_art.png';
import wallArt2 from './ashleyPhotos/wall_art2.png';
import washingtonSquare from './ashleyPhotos/washington_square.jpg';
import welcomeToHsv from './ashleyPhotos/welcome_to_huntsville.png';
import whiteBuilding from './ashleyPhotos/white_building.png';
import GridGallery from 'react-grid-gallery';

class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {
            images: [
                {src: `${animalFountain}`, thumbnail: `${animalFountain}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${soldierStatue}`, thumbnail: `${soldierStatue}`, thumbnailWidth: 219, thumbnailHeight: 320},
                {src: `${apartments}`, thumbnail: `${apartments}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${wallArt2}`, thumbnail: `${wallArt2}`, thumbnailWidth: 219, thumbnailHeight: 320},
                {src: `${banditoBurrito}`, thumbnail: `${banditoBurrito}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${singing}`, thumbnail: `${singing}`, thumbnailWidth: 219, thumbnailHeight: 320},
                {src: `${baseball}`, thumbnail: `${baseball}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${loweMill}`, thumbnail: `${loweMill}`, thumbnailWidth: 219, thumbnailHeight: 320},
                {src: `${bigSpring}`, thumbnail: `${bigSpring}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${hotAirBaloon}`, thumbnail: `${hotAirBaloon}`, thumbnailWidth: 219, thumbnailHeight: 320},
                {src: `${diners}`, thumbnail: `${diners}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${hsvRunway}`, thumbnail: `${hsvRunway}`, thumbnailWidth: 219, thumbnailHeight: 320},
                {src: `${food}`, thumbnail: `${food}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${jeffSt}`, thumbnail: `${jeffSt}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${usaRocket}`, thumbnail: `${usaRocket}`, thumbnailWidth: 219, thumbnailHeight: 320},
                {src: `${jeffSt2}`, thumbnail: `${jeffSt2}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${jeffSt3}`, thumbnail: `${jeffSt3}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${clintonRow}`, thumbnail: `${clintonRow}`, thumbnailWidth: 219, thumbnailHeight: 320},
                {src: `${lakeSunset}`, thumbnail: `${lakeSunset}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${lakeView}`, thumbnail: `${lakeView}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${lights}`, thumbnail: `${lights}`, thumbnailWidth: 219, thumbnailHeight: 320},
                {src: `${pond}`, thumbnail: `${pond}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${stars}`, thumbnail: `${stars}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${tree}`, thumbnail: `${tree}`, thumbnailWidth: 219, thumbnailHeight: 320},
                {src: `${stream}`, thumbnail: `${stream}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${streetExposure}`, thumbnail: `${streetExposure}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${guitar}`, thumbnail: `${guitar}`, thumbnailWidth: 219, thumbnailHeight: 320},
                {src: `${washingtonSquare}`, thumbnail: `${washingtonSquare}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${welcomeToHsv}`, thumbnail: `${welcomeToHsv}`, thumbnailWidth: 320, thumbnailHeight: 219},
                {src: `${wallArt}`, thumbnail: `${wallArt}`, thumbnailWidth: 219, thumbnailHeight: 320},
                {src: `${whiteBuilding}`, thumbnail: `${whiteBuilding}`, thumbnailWidth: 320, thumbnailHeight: 219}
            ]
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div className="gallery-page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Huntsville Alabama Photo Gallery </title>
                    <meta name="description" content="Huntsville Alabama is a beautiful place and we have partnered with one of the best local photographer/videographer Ashley Davis to provide these awesome photos" />
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/gallery"/>
                </Helmet>
                <h1 className="gallery-header"> Huntsville Alabama Photo Gallery </h1>
                <p className="gallery-thanks"> A big shoutout to Ashley Davis for the photos! </p>
                <GridGallery id="grid-gallery" images={this.state.images} enableImageSelection={false} />
                <div className="gallery-bottom-spacer"></div>
            </div>
        )
    }
}

export default Gallery;