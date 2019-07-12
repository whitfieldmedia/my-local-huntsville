import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow';
import background from './ashleyPhotos/welcome_to_huntsville.png';
import background3 from './ashleyPhotos/diners.png';
import background2 from './ashleyPhotos/jefferson_st.png';
import background1 from './ashleyPhotos/big_springs_park.png';
import background5 from './ashleyPhotos/pond.png';
import background6 from './ashleyPhotos/street_exposure.png';
import smallBack from './ashleyPhotos/lowe_mill.png';
import smallBack2 from './ashleyPhotos/usa_rocket.png';
import smallBack3 from './ashleyPhotos/soldier_statue.png';
import smallBack4 from './ashleyPhotos/clinton_row.jpg';
import rightArrow from './icons/next-page-white.svg';
import street from './ashleyPhotos/jeff_st2.png';
import food from './ashleyPhotos/food.png';
import beats from './ashleyPhotos/guitar_black_white2.jpg';
import nature from './ashleyPhotos/stream.png';
import museum from './ashleyPhotos/white_building.png';
import CrushWineFestival from './videos/CrushWineFestivalHome';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './css/styles.css';
import banner from './bannerAd/rpearman_longbanner.svg';
import mobileBanner from './bannerAd/rpearman_mobile.svg';
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
        <div className="top-wrapper">
          {this.state.isBig
          ?  <BackgroundSlideshow images={[background,background1,background2,background3,background5,background6]} />
          : <BackgroundSlideshow images={[smallBack, smallBack2, smallBack3, smallBack4]} />}
        </div>
        <div className="banner-wrapper">
          <img className="banner" src={banner} alt="ray pearman lincoln"/>
          <img className="mobileBanner" src={mobileBanner} alt="Ray Pearman Lincoln"/>
        </div>
        <div className="spacer"></div>
        <div className="main-events-container">
          <div className="main-events-column">
            <Link className="home-event-link" to="/events">
              <h2 className="home-events-header"> Upcoming Events </h2>
              <img src={rightArrow} className="right-arrow-icon" alt="Right Arrow"/> 
            </Link>
            <p className="main-event-par"> Looking for something to do? <br/> Check out upcoming events in Huntsville! </p>
          </div>
          <div className="main-events-column">
              <CrushWineFestival />
          </div>
        </div>
        <div className="streets-eats-beats-container">
          <div className="home-streets-container">
            <div className="home-streets-column">
              <img src={street} className="home-street-image" alt="Jefferson Street"/>
            </div>
            <div className="home-streets-column">
              <Link to="/streets" className="home-streets-link">
                <h2 className="home-streets-header"> Streets </h2>
                <img src={rightArrow} className="right-arrow-icon" alt="right arrow"/>
              </Link>
              <p className="home-streets-par"> Watch as we go out on the streets of Huntsville to see what's going on, find out about new stores, upcoming events, and more! </p>
            </div>
          </div>
          <div className="home-eats-container">
            <div className="home-eats-column">
              <Link to="/eats" className="home-eats-link">
                <h2 className="home-eats-header"> Eats </h2>
                <img src={rightArrow} className="right-arrow-icon" alt="right arrow"/>
              </Link>
              <p className="home-eats-par"> Huntsville Alabama is full of great places to eat and enjoy. Watch as we go to local restaurants try the food and see what they are all about. </p>
            </div>
            <div className="home-eats-column">
              <img src={food} className="home-eats-image" alt="Food"/>
            </div>
          </div>
          <div className="home-beats-container">
            <div className="home-beats-column">
              <img src={beats} className="home-beats-image" alt="Person playing guitar"/>
            </div>
            <div className="home-beats-column">
              <Link to="/beats" className="home-beats-link">
                <h2 className="home-beats-header"> Beats </h2>
                <img src={rightArrow} className="right-arrow-icon" alt="Right Arrow"/>
              </Link>
              <p className="home-beats-par"> Huntsville's music scene is a one of a kind expeirence. Check out what it has to offer. </p>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
        <h2 className="things-to-do-header"> Explore </h2>
        <div className="things-to-do-container">
          <div className="things-to-do-column">
            <Link to="/nature" className="home-nature-link">
              <h2 className="home-nature-header"> Nature </h2>
              <img src={rightArrow} className="right-arrow-icon" alt="Right Arrow"/>
            </Link>
            <div className="spacer"></div>
            <img src={nature} className="home-nature-image" alt="Stream"/>
          </div>
          <div className="things-to-do-column">
            <Link to="/museums" className="home-museum-link">
              <h2 className="home-museums-header"> Museums </h2>
              <img src={rightArrow} className="right-arrow-icon" alt="Right Arrow"/>
            </Link>
            <div className="spacer"></div>
            <img src={museum} className="home-museum-image" alt="The Eloise McDonald Propst Guest Center"/>
          </div>
        </div>
        <div className="where-to-stay-container">
          <Link to="/hotels" className="home-hotel-link">
            <h2 className="home-hotel-header"> Where to Stay </h2>
            <img src={rightArrow} className="right-arrow-icon" alt="Right Arrow"/>
          </Link>
          <p className="home-hotel-par"> Visiting Huntsville? Let us help you find the perfect place to stay. </p>
        </div>
      </div>
    )
  }
}

export default Home;

