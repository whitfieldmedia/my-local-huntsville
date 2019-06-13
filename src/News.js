import React from 'react';
import './css/news.css';
import affordableImage from './images/huntsville-affordable-news.jpeg';
import growthImage from './images/huntsville-growing-news.jpg';
import newRestaurants from './images/woman-at-small-business-entrance-EZ6X4CP.jpg';

class News extends React.Component{

    render() {
        console.log(this.props.news)
        return (
            <div className="news-container">
                <a className="news-wrapper" href="https://realestate.usnews.com/real-estate/slideshows/best-affordable-places-to-live-in-the-us?slide=26&fbclid=IwAR0Zyuj1MLK2E99j_xXmc-gOh6CCYhvTvC-h4yLvuka6Sir4O9_cg_2KMx4" target="_blank" rel="noopener noreferrer">  
                    <h2 className="news-title"> Huntsville is one of the most affordable cities in the U.S. </h2>
                    <div className="news-img-par-wrapper">
                        <img src={affordableImage} className="news-image" alt="Huntsville Alabama Big Springs Park"/>
                        <p className="news-description"> Huntsville is the most affordable place to live out of the 125 most populous metro areas in the U.S... </p>
                    </div>
                </a>
                <a className="news-wrapper" href="https://www.al.com/news/huntsville/2018/05/huntsville_keeps_growing_on_tr.html" target="_blank" rel="noopener noreferrer"> 
                    <h2 className="news-title"> Huntsville Keeps growing, on track to become the state's largest city in six years </h2>
                    <div className="news-img-par-wrapper">
                        <img src={growthImage} className="news-image" alt="Huntsville Alabama Big Springs Park"/>
                        <p className="news-description">The Rocket City continues to see a surge in population growth and is on track to become the state's largest city perhaps in as soon as five years...</p>
                    </div>
                </a>
                <a className="news-wrapper" href="https://ourvalleyevents.com/5-new-huntsville-restaurants-coming-in-2019/" target="_blank" rel="noopener noreferrer">
                    <h2 className="news-title"> 5 New Huntsville Restaurants Coming In 2019! </h2>
                    <div className="news-img-par-wrapper">
                        <img src={newRestaurants} className="news-image" alt="Huntsville Alabama New Restaurants 2019"/>
                        <p className="news-description"> Huntsville has so many new restaurants opening soon that it's hard to keep track of what they are, where they're located, and when they're opening... </p>
                    </div>
                </a>
            </div>
        )
    }
}

export default News;