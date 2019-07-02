import React from 'react';
import madisonNature from './images/madison-nature-trail.png';
import garden from './images/garden.png';
import bigSprings from './ashleyPhotos/big_springs_park.png';
import monteSano from './images/monte-sano-state-park.png';
import { Helmet } from 'react-helmet';
import './css/nature.css';

class Nature extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div className="nature-top">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> Huntsville Alabama Best Trails and Parks </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/nature"/>
                    <meta name="description" content="Huntsville Alabama is beautiful. If you're a outdoor enthusiast or a family looking to spend a day in the great outdoors Huntsville has you covered." />
                </Helmet>
                <div className="nature-wrapper">
                    <div className="nature-container">
                        <h2 className="nature-header2"> Madison County Nature Trail - Huntsville, Al </h2>
                        <a className="directions" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Madison+County+Nature+Trail/@34.5988298,-86.5209938,15.58z/data=!4m5!3m4!1s0x88620dcbc793dd79:0x253e1686137c1ade!8m2!3d34.598093!4d-86.517315"> 
                            5000 Nature Trail Td SE, Huntsville, AL 35803 
                        </a>
                        <img src={madisonNature} className="photo" alt="Madison County Nature Trail - My Local Huntsville - Alabama" />
                        <p className="about">
                                Located a-top Green Mountain in southeast Huntsville Alabama, high above the noise of the city, a mood of quiet tranquility envelops you as you enter the 72 acre park. <br/> <br/>

                                Open free to the public each day from seven in the morning until thirty minutes prior to sunset, your convenient escape from urban life encompasses Sky Lake, a 1.5 mile 
                                walking trail, pavilion, chapel, outdoor classroom, picnic tables, covered bridge, and accessible restrooms. <br/><br/>
                                
                                The State's largest and oldest Champion Winged Elm Tree - stands tall along the Trail. <br/><br/>
                                
                                The Madison County Nature Trail provides the perfect setting for nature lovers of all ages — whatever the season. Spring features the park’s beautiful azaleas and dogwoods, 
                                while summer exhibits colorful wildflowers blooming beneath the forest’s deep green canopy.
                        </p>
                    </div>
                    <div className="line"></div>
                    <div className="nature-container">
                        <h2 className="nature-header2"> Huntsville Botanical Garden - Huntsville, AL </h2>
                        <a className="directions" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Huntsville+Botanical+Garden/@34.7063492,-86.6368178,16.19z/data=!4m5!3m4!1s0x88626c6e9ec1e7c5:0x9cecb08319fc29da!8m2!3d34.7074956!4d-86.6340375"> 
                            4747 Bob Wallace Ave SW, Huntsville, AL 35805
                        </a>
                        <img src={garden} className="photo-left" alt="Huntsville Botanical Garden - My Local Huntsville - Alabama" />
                        <p className="about-right">
                                The Huntsville Botanical Garden is open year-round and boasts a picture-perfect aquatic garden, a spectacular wildflower and nature trail, and numerous specialty gardens 
                                and plant collections. The 9,000-square-foot Anderson Education Center contains the nation’s largest open-air butterfly house and is home to turtles, button quail, 
                                tadpoles, frogs, and other critters.
                                <br/> <br/>
                                The Children’s Garden, made up of eight themed areas, including a dinosaur garden, storybook garden, and pollywog bog, is a 
                                popular destination for play, pretend, and hands-on learning. Seasonal festivals and exhibits include Beaks and Barks, Huntsville Blooms, the Scarecrow Trail, and the 
                                nationally recognized Galaxy of Lights.
                                <br/> <br/>
                                Be sure to visit our Guest Center to enjoy an art exhibit, browse our unique gift shop, or grab a bite to eat at the Dogwood 
                                Cafe. We also offer indoor and outdoor facility rental options and education programs for all ages.
                        </p>
                    </div>
                    <div className="line"></div>
                    <div className="nature-container"> 
                        <h2 className="nature-header2"> Big Spring Park - Huntsville, AL </h2>
                        <a className="directions" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Big+Spring+Park/@34.7273798,-86.590333,17z/data=!3m1!4b1!4m5!3m4!1s0x8862148fffffffff:0x3edc6fc5867c764!8m2!3d34.7273798!4d-86.5881443">
                            Church St SW, Huntsville, AL 35801
                        </a>
                        <img src={bigSprings} className="photo" alt="Big Spring Park - My Local Huntsville - Alabama" /> 
                        <p className="about">
                            The crown jewel of downtown Huntsville centered around a spring-fed lagoon fed by the same spring that John Hunt used when he settled among the native American Indians in 1805. 
                            Big Springs Grotto is a must-see in downtown Huntsville.

                        </p>
                    </div>

                    <div className="line"></div>
                    <div className="nature-container">
                        <h2 className="nature-header2"> Monte Sano State Park - Huntsville, AL </h2>
                        <a className="directions" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Monte+Sano+State+Park/@34.7451078,-86.5204114,15z/data=!4m8!1m2!2m1!1smonte+Sano+State+Park!3m4!1s0x8862146d0e36ee4b:0x3b30f262cc8ef0dc!8m2!3d34.7399425!4d-86.5118155">
                            5105 Nolen Ave SE, Huntsville, AL 35801
                        </a>
                        <img src={monteSano} className="photo-left" alt="Monte Sano State Park - My Local Huntsville - Alabama" />
                        <p className="about-right"> 
                            Monte Sano State Park is a publicly owned recreation area and mountaintop retreat encompassing on the eastern portion of the top and slopes of Monte Sano Mountain 
                            on the east side of Huntsville, Alabama. The state park has 1930s-era, Civilian Conservation Corps–built rustic cottages, hiking trails and picnic areas with 
                            scenic overlooks, and modern campsites. It is managed by the Alabama Department of Conservation and Natural Resources.   
                            <br/><br/>
                            Monte Sano sits on 2,140 acres with spectacular vistas from atop the mountain, especially when the fall leaves show off their colors. In the spring, native azaleas 
                            bloom along the 20 miles of hiking trails and 14 miles of biking trails.
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Nature;