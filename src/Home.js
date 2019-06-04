import React from 'react';
import Poppy from './bars/Poppy';
import ArtTrail from './activities/ArtTrail';
import Bullet from './activities/Bullet';
import Gardens from './activities/Gardens';
import Bar805 from './bars/Bar805';
import Brickhouse from './bars/Brickhouse';
import Btr from './bars/Btr';
import Otbx from './bars/Otbx';
import Straight from './bars/Straight';
import Yellowhammer from './bars/Yellowhammer';
import Boot from './restaurants/Boot';
import BrokenEgg from './restaurants/BrokenEgg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHomeNews } from './redux/news';
import './css/styles.css';

class Home extends React.Component{
  constructor() {
    super()
    this.state = {
      news: false
    }
  }
  componentDidMount() {
    this.props.getHomeNews();
  }
  componentDidUpdate() {
    if(this.props.news.articles && this.state.news !== true) {
        this.setState({ news: true })
    }
  }
  showRestaurants = () => {
    var places = [
      <Yellowhammer key="1"/>, <Brickhouse key="2"/>, <Btr key="3"/>, <Straight key="4"/>, <Boot key="5"/>, <BrokenEgg key="6"/>, <Poppy key="7"/>, <Otbx key="8"/>, <Bar805 key="9"/>
    ];
    var a = [0,1,2,3,4,5,6,7,8];
    var n;
    var r = []
    for (n=0; n < 4; ++n) {
      var i = Math.floor((Math.random() * (9-n)));
      r.push(a[i]);
      a[i] = a[8-n];
    }
    var first = r[0]
    var second = r[1]
    var third = r[2]
    var fourth = r[3]
    return [
      places[first], places[second], places[third], places[fourth]
    ]
  }
  showActivities = () => {
    var places = [
      <Bullet key="bullet & barrel"/>, <ArtTrail key="trail"/>, <Gardens key="botanical gardens"/>
    ];
    let one = Math.floor(Math.random() * 3);
    let two = Math.floor(Math.random() * 3);
    if(one !== two) {
      return [ places[one], places[two] ]
    } else {
      if(one >= 2) {
        one = 0
      } else {
        one++
      }
    }
    return [
      places[one], places[two]
    ]
  }

  render() {
    return (
      <div>
        <div className="top-wrapper">
          <div className="top-container">
            <h1 className="top-header"> My Local <br/> Huntsville </h1>
          </div>
        </div>
        <a className="weatherwidget-io" href="https://forecast7.com/en/34d73n86d59/huntsville/?unit=us" data-label_1="HUNTSVILLE" data-label_2="WEATHER" data-theme="original" >HUNTSVILLE WEATHER</a>
        <div className="container">
          <div className="button-wrapper">
            <div className="column">
              <a className="top-link" href="https://www.facebook.com/localgrenada/" rel="noopener noreferrer"> 
                <i className="fab fa-facebook-f"></i> Follow Us!
              </a>
              <Link to="/contact" className="top-link" >
                Partner With Us!
              </Link>
            </div>
            <div className="main-video-holder">
              <iframe src="https://player.vimeo.com/video/337344822" title="My Local Huntsville Promo Commercial" className="main-video" allowFullScreen frameBorder="0"></iframe>
            </div>
          </div>
        </div>
        <div className="line"></div>
          <h2 className="header2"> News Articles </h2> 
          <div className="page-link-holder">
            <Link to="/news" className="page-link"> See More.. </Link>
          </div>
          <div className="line"></div>
          <div className="home-news-wrapper">
            {this.state.news
            ? this.props.news.articles.filter(data => data.title).map(data => (
              <a className="home-article-wrapper" key={data.url} href={data.url} target="_blank" rel="noopener noreferrer">
                <p className="home-news-author"> { data.author } </p>
                <h2 className="home-news-header2"> { data.title } </h2>
                <img src={data.urlToImage} className="home-news-image" alt={data.description}/>
                <p className="home-news-content"> { data.description } </p>

                <div className="home-news-button"> read more </div>
              </a>
            ))
            :null}
          </div>
        <div className="line"></div>
        <h2 className="header2"> Restaurants & Breweries </h2>
        <div className="page-link-holder">
          <Link className="page-link" to="/partners"> SEE ALL </Link>
        </div>
        <div className="line"></div>
        <div className="mid-wrapper">
          {this.showRestaurants()}
        </div>
        <div className="line1"></div>
        <h2 className="header2"> What to Do </h2>
        <div className="page-link-holder">
          <Link className="page-link" to="/partners"> SEE ALL </Link>
        </div>
        <div className="line"></div>
        <div className="mid-wrapper">
          {this.showActivities()}
        </div>
      </div>
    )
  }
}

export default connect(state => state, { getHomeNews })(Home)