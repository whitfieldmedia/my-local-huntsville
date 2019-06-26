import React from 'react';
import './css/work.css';
import { Helmet } from 'react-helmet';

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
                    <iframe className="home-video" title="CFD Research Ribbon Cutting" src="https://player.vimeo.com/video/344128970" frameBorder="0" allowFullScreen></iframe>
                    <iframe className="home-video" title="Hair Queen Beauty Ribbon Cutting" src="https://player.vimeo.com/video/306376134" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}

export default Work;