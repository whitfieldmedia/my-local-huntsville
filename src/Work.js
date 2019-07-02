import React from 'react';
import Cfd from './videos/CFD';
import HairQueen from './videos/HairQueen';
import { Helmet } from 'react-helmet';
import './css/work.css';

class Work extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render () {
        return (
            <div className="work-page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Businesses in Huntsville Alabama </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/work"/>
                    <meta name="description" content="Watch as we go out in the community and attend ribbon cuttings and interview local business owners." />
                </Helmet>
                <h1 className="work-header"> Work </h1>
                <div className="work-video-holder">
                    <Cfd />
                    <HairQueen />
                </div>
            </div>
        )
    }
}

export default Work;