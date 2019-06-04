import React from 'react';
import { connect } from 'react-redux';
import { getNews, getTimes, getCnn, getEspn, getNatGeo, getWash, getUsa, getWired, getTech, getLocal } from './redux/news';
import './css/news.css';

class News extends React.Component{
    constructor() {
        super()
        this.state = {
            news: false
        }
    }

    componentWillMount() {
        this.props.getLocal();
    }
    
    componentDidUpdate() {
        if(this.props.news.articles && this.state.news !== true) {
            this.setState({ news: true })
        }
    }

    axios = () => { this.props.getNews() }
    nyTimes = () => { this.props.getTimes() }
    cnn = () => { this.props.getCnn() }
    espn = () => { this.props.getEspn() }
    natGeo = () => { this.props.getNatGeo() }
    wash = () => { this.props.getWash() }
    usa = () => { this.props.getUsa() }
    wired = () => { this.props.getWired() }
    tech = () => { this.props.getTech() }
    local = () => { this.props.getLocal() }

    render() {
        return (
            <div>
                <div className="source-holder">
                    <div className="source" onClick={this.axios}> Axios </div>
                    <div className="source" onClick={this.nyTimes}> New York Times </div>
                    <div className="source" onClick={this.cnn}> Cnn </div>
                    <div className="source" onClick={this.espn}> Espn</div>
                    <div className="source" onClick={this.natGeo}> National Geographic </div>
                    <div className="source" onClick={this.wash}> Washington Post </div>
                    <div className="source" onClick={this.usa}> Usa Today </div>
                    <div className="source" onClick={this.wired}> Wired </div>
                    <div className="source" onClick={this.tech}> Tech Radar </div>
                    <div className="source" onClick={this.local}> Local News </div>
                </div>
                <div className="news-wrapper">
                    {this.state.news
                    ? this.props.news.articles.filter(data => data.urlToImage).map(data => (
                        <a className="article-wrapper" key={data.url} href={data.url} target="_blank" rel="noopener noreferrer">
                            <h2 className="news-header2"> { data.title } </h2>
                            <img className="news-image" src={data.urlToImage} alt={data.description}/>
                            <p className="news-content"> { data.description } </p>
                            <p className="news-author" > { data.author } </p>
                            <p className="news-author"> { data.source.id } </p>
                            <div className="news-button"> read more </div>
                        </a>
                    ))
                    : null }
                </div>
            </div>
        )
    }
}

export default connect(state => state, { getNews, getTimes, getCnn, getEspn, getNatGeo, getWash, getUsa, getWired, getTech, getLocal })(News);