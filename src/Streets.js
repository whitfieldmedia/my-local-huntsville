import React from 'react';
import ArtTrail from './activities/ArtTrail';
import Bullet from './activities/Bullet';
import Gardens from './activities/Gardens';
import './css/streets.css';

class Streets extends React.Component {
    render() {
        return (
            <div className="streets-page">
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