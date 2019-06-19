import React from 'react';
import ArtTrail from './activities/ArtTrail';
import Bullet from './activities/Bullet';
import Gardens from './activities/Gardens';
import './css/streets.css';
import { Helmet } from 'react-helmet';

class Streets extends React.Component {
    render() {
        return (
            <div className="streets-page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Best Activities in Huntsville Alabama </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/streets"/>
                    <meta name="description" content="Huntsville Alabama is awesome. From a secret art walk on the streets to some activities for the family Huntsville won't dissapoint." />
                </Helmet>
                <h1 className="streets-header"> Our Favorite Activites </h1>
                <div className="streets-things-wrapper">
                    <ArtTrail />
                    <Bullet />
                    <Gardens />
                </div>
            </div>
        )
    }
} 

export default Streets;