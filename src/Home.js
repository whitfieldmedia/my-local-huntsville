import React from 'react';
import rightArrow2 from './icons/next-page-white2.svg';
import street from './ashleyPhotos/jeff_st2.png';
import food from './ashleyPhotos/food.png';
import beats from './ashleyPhotos/guitar_black_white2.jpg';
import nature from './ashleyPhotos/stream.png';
import museum from './ashleyPhotos/white_building.png';
import hotel from './images/hotel_cover.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './css/styles.css';
import './css/banner.css';

class Home extends React.Component{
  constructor() {
    super()
    this.state = {
      isBig: true
    }
    this.findWidth = this.findWidth.bind(this)
  }
  componentDidMount() {
    window.scrollTo(0,0);
    this.findWidth();
    window.addEventListener('resize', this.findWidth);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.findWidth);
  }
  findWidth = () => {
    if(window.innerWidth > 420 && !this.state.isBig) {
      this.setState({
        isBig: true
      })
    } else if(window.innerWidth <= 420 && this.state.isBig) {
      this.setState({
        isBig: false
      })
    }
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8"/>
          <title> My Local Huntsville </title>
          <link rel="canonical" href="https://www.mylocalhuntsville.com/"/>
          <meta name="description" content="My Local Huntsville is a all around guide to Huntsville Alabama. Whether you are in town visiting or a local we keep up to date with whats happening and the best things to do in Huntsville Alabama." />
        </Helmet>
        <div className="top-wrapper"></div>
        <div className="home-video-container">
          <div className="home-video-wrapper">
            <h3 className="home-header3">
              Mortgage Right 
            </h3>
            <iframe className="website-video" 
              src="https://player.vimeo.com/video/384544049" 
              allow="autoplay; fullscreen" 
              title="Mortgage Right ~ Huntsville Alabama" 
              frameBorder="0" 
              width="640" 
              height="360" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="home-video-seperator"></div>
          <div className="home-video-wrapper">
            <h3 className="home-header3">
              Hotel & Entertainment Channel
            </h3>
            <iframe className="website-video" 
              title="My Local Huntsville Ad" 
              src="https://player.vimeo.com/video/368617064" 
              width="640" 
              height="360" 
              frameBorder="0" 
              allow="autoplay; fullscreen" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
        <div className="home-what-wrapper">
          <Link to="/activities" className="home-what-container">
            <img src={street} className="home-what-img" alt="Jerfferson Street - Huntsville, Al"/>
            <h2 className="home-what-header">
              Activities
              <img src={rightArrow2} className="home-what-arrow" alt="Find Activities in Huntsville."/>
            </h2>
          </Link>
          <Link to="/food" className="home-what-container">
            <img src={food} className="home-what-img" alt="Food - Huntsville, Al"/>
            <h2 className="home-what-header">
              Food
              <img src={rightArrow2} className="home-what-arrow" alt="Find Activities in Huntsville."/>
            </h2>
          </Link>
          <Link to="/bars" className="home-what-container">
            <img src={beats} className="home-what-img" id="home-bar-img" alt="Live Music - Huntsville, Al"/>
            <h2 className="home-what-header">
              Bars & Breweries
              <img src={rightArrow2} className="home-what-arrow" alt="Find Activities in Huntsville."/>
            </h2>
          </Link>
          <Link to="/nature" className="home-what-container">
            <img src={nature} className="home-what-img" alt="Stream in Huntsville, Al"/>
            <h2 className="home-what-header">
              Nature
              <img src={rightArrow2} className="home-what-arrow" alt="Find Activities in Huntsville."/>
            </h2>
          </Link>
          <Link to="/museums" className="home-what-container">
            <img src={museum} className="home-what-img" alt="The Eloise McDonald Propst Guest Center"/>
            <h2 className="home-what-header">
              Museums
              <img src={rightArrow2} className="home-what-arrow" alt="Find Activities in Huntsville."/>
            </h2>
          </Link>
          <Link to="/hotels" className="home-what-container">
            <img src={hotel} className="home-what-img" alt="Hotels in Huntsville, Al"/>
            <h2 className="home-what-header">
              Hotels
              <img src={rightArrow2} className="home-what-arrow" alt="Find Activities in Huntsville."/>
            </h2>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home;

