import React from 'react';
import rocketLogo from './images/rocket-logo.png';
import space3 from './images/us-space1.jpg';
import space2 from './images/us-space2.jpg';
import space1 from './ashleyPhotos/usa_rocket.png';
import space4 from './images/us-space4.jpg';
import vetLogo from './images/vet-logo.png';
import vet1 from './images/verterans-trailer.png';
import vet2 from './images/veterans-old-photo.png';
import vet3 from './images/veteran-jeeps.jpg';
import vet4 from './images/civil_war1.png';
import loweLogo from './images/lowe-mill-logo.png';
import lowe2 from './images/lowe-mill-art1.jpg';
import lowe1 from './ashleyPhotos/lowe_mill.png';
import lowe3 from './images/mill2.jpg';
import lowe4 from './images/mill3.jpg';
import artLogo from './images/museum-of-art-logo.png';
import art1 from './images/museum-art1.jpg';
import art2 from './images/museum-art2.jpg';
import art3 from './images/museum-art3.jpg';
import art4 from './images/museum-art4.jpg';
import depotLogo from './images/depotlogo.jpg';
import depot1 from './images/depot1.png';
import depot2 from './images/depot2.png';
import depot3 from './images/depot3.png';
import depot4 from './images/depot-museum.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Helmet } from 'react-helmet';
import './css/museums.css';


class Museums extends React.Component {
    constructor() {
        super();
        this.state = {
            open1: false,
            open2: false, 
            open3: false,
            open4: false,
            open5: false
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    openRocket = () => {
        this.setState({ open1: true })
    }
    closeRocket = () => {
        this.setState({ open1: false })
    }
    openVeteran = () => {
        this.setState({ open2: true })
    }
    closeVeteran = () => {
        this.setState({ open2: false })
    }
    openLowe = () => {
        this.setState({ open3: true })
    }
    closeLowe = () => {
        this.setState({ open3: false })
    }
    openArt = () => {
        this.setState({ open4: true })
    }
    closeArt = () => {
        this.setState({ open4: false })
    }
    openDepot = () => {
        this.setState({ open5: true })
    }
    closeDepot = () => {
        this.setState({ open5: false })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Museums in Huntsville Alabama </title>
                    <link rel="canonical" href="https://www.mylocalhuntsville.com/museums"/>
                    <meta name="description" content="Huntsville known as Rocket City has some awesome museums! If you're interesed in what museums to go to while you're in town check out our top choices." />
                </Helmet>
                <div className="museum-container">
                    <div className="museum-wrapper">
                        <div className="learn-more" onClick={this.openRocket}>
                            <img src={rocketLogo} className="small-photo" alt="U.S. Space and Rocket Center" /> 
                            <button className="button"> Learn More </button>
                            <h2 className="title2"> U.S. Space and Rocket Center </h2>
                            <p className="smallPar">
                                Learn about the development of the space shuttle program...
                            </p>
                        </div>
                    </div>

                    <div className="museum-wrapper">
                        <div className="learn-more" onClick={this.openVeteran}>
                            <img src={vetLogo} className="small-photo" alt="U.S. Veterans Memorial Museum" /> 
                            <button className="button" onClick={this.openVeteran}> Learn More </button>
                            <h2 className="title2"> U.S. Veterans Memorial Museum </h2>
                            <p className="smallPar">
                                The museum is dedicated to promoting and disseminating... 
                            </p>
                        </div>
                    </div>

                    <div className="museum-wrapper">
                        <div className="learn-more" onClick={this.openLowe}>
                            <img src={loweLogo} className="small-photo" alt="Lowe Mill Arts & Entertainment" />
                            <button className="button" onClick={this.openLowe}> Learn More </button>
                            <h2 className="title2"> Lowe Mill Arts & Entertainment </h2>
                            <p className="smallPar">
                                Lowe Mill ARTS & Entertainment is the largest privately...
                            </p>
                        </div>
                    </div>

                    <div className="museum-wrapper">
                        <div className="learn-more" onClick={this.openArt}>
                            <img src={artLogo} className="small-photo" alt="Huntsville Museum of Art" />
                            <button className="button"> Learn More </button>
                            <h2 className="title2"> Huntsville Museum of Art </h2>
                            <p className="smallPar">
                                The Huntsville Museum of Art, North Alabama’s leading...
                            </p>
                        </div>
                    </div>

                    <div className="museum-wrapper">
                        <div className="learn-more" onClick={this.openDepot}>
                            <img src={depotLogo} className="small-photo" alt="Huntsville Depot Museum" />
                            <button className="button"> Learn More </button>
                            <h2 className="title2"> Huntsville Depot Museum </h2>
                            <p className="smallPar">
                                Hear the rattle of the tracks and the engineer’s whistle...
                            </p>
                        </div>
                    </div>
                </div>

                {this.state.open1 
                    ?
                    <div className="popup-container" id="rocket-popup">
                        <div className="popupCloseButton" onClick={this.closeRocket}>X</div>
                        <h2 className="museum-header2"> U.S. Space and Rocket Center </h2>
                        <div className="slideshow-container">
                            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} transitionTime={350} interval={5000} dynamicHeight>
                                <div>
                                    <img className="museum-image" src={space1} alt="U.S. Space and Rocket Center " /> 
                                </div>
                                <div>
                                    <img className="museum-image" src={space2} alt="U.S. Space and Rocket Center" />
                                </div>
                                <div>
                                    <img className="museum-image" src={space3} alt="U.S. Space and Rocket Center" />
                                </div>
                                <div>
                                    <img className="museum-image" src={space4} alt="U.S. Space and Rocket Center" />
                                </div>
                            </Carousel>
                        </div>
                        <p className="museum-par">
                            Learn about the development of the space shuttle program, examine military hardware in our Team Redstone exhibit, challenge yourself on our Mars Climbing Wall, race against the clock 
                            on the NASA Human Exploration Rover Challenge course, experience a motion-based flight simulation on board HyperShip, and experience the Red Planet in our Mars Play Station. Also 
                            attend a presentation in our model of NASA’s Payload Operations Integration Center and tour through two International Space Station modules as a part of the "ISS: Science on Orbit" 
                            exhibit. Enjoy The Live Science interactive presentations that introduce scientific principles, historic information and astronomical facts in 15-minute demonstrations.
                        </p>
                        <div className="museum-row">
                            <div className="admission">
                                <h3 className="museum-header3"> Admission </h3>
                                <a className="tickets ticket-link" href="https://shop-rocketcenter.tamretail.net/Events.aspx"> Adults (13 and up) - $25 </a>
                                <a className="tickets ticket-link" href="https://shop-rocketcenter.tamretail.net/Events.aspx"> Children (5 to 12 ) - $17 </a> 
                                <a className="tickets ticket-link" href="https://shop-rocketcenter.tamretail.net/Events.aspx"> Children 4 and under - FREE </a>
                            </div>
                            <div className="hours">
                                <h3 className="museum-header3"> Hours </h3>
                                <p className="open-par"> 
                                    Everyday <br/> 9 a.m. - 5 p.m.
                                </p>
                            </div>
                            <div className="contact">
                                <h3 className="museum-header3"> Contact </h3>
                                <a className="tickets ticket-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/U.S.+Space+%26+Rocket+Center/@34.7111455,-86.6561125,17z/data=!3m1!4b1!4m5!3m4!1s0x88626c10a5eae5d7:0x3e32325e196cc12e!8m2!3d34.7111411!4d-86.6539238"> 
                                    1 Tranquility Base, <br/> Huntsvillle, AL 35805
                                </a> 
                                <a className="tickets ticket-link" href="tel:18006377223"> 1 (800) 637-7223 </a>
                                <a className="tickets ticket-link" href="mailto:social@spacecamp.com"> social@spacecamp.com </a>
                            </div> 
                        </div>
                </div>
                : null }

                {this.state.open2
                    ? <div className="popup-container" id="veteran-popup">
                        <div className="popup-content">
                        <div className="popupCloseButton" onClick={this.closeVeteran}>X</div>
                        <h2 className="museum-header2"> U.S. Veterans Memorial Museum </h2>
                        <div className="slideshow-container">
                            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} transitionTime={350} interval={5000} dynamicHeight>
                                <div>
                                    <img className="museum-image" src={vet1} alt="U.S. Veterans Memorial Museum Jeep with Trailer" />
                                </div>
                                <div>
                                    <img className="museum-image" src={vet2} alt="U.S. Veterans Memorial Museum old" />
                                </div>
                                <div>
                                    <img className="museum-image" src={vet3} alt="U.S. Veterans Memorial Museum Jeeps" />
                                </div>
                                <div>
                                    <img className="museum-image" src={vet4} alt="U.S. Veterans Memorial Museum Truck" />
                                </div>
                            </Carousel>
                        </div>
                        <p className="museum-par">
                                The museum is dedicated to promoting and disseminating the accomplishments of American military men and women. Our emphasis is on participants of World War I and subsequent conflicts, 
                                whose survivors and families can use the museum facilities to reminisce on their own experiences and those of parents, grandparents, and other close relatives.  The museum has been 
                                designated by the Alabama House of Representatives as the State of Alabama Veterans Memorial Museum. The U.S. Veterans Memorial Museum displays more than 30 historical military 
                                vehicles from World War I to the present, as well as tableaus, artifacts, and other memorabilia dating back to the Revolutionary War.
                        </p>
                        <div className="museum-row">
                            <div className="admission">
                                <h3 className="museum-header3"> Admission </h3>
                                <p className="tickets"> $5 Donation for Adults </p>
                                <p className="tickets"> $4 Donation for Seniors </p>
                                <p className="tickets"> $4 Donation for Seniors </p>
                                <p className="tickets"> $3 Donation for Students under 18 </p>
                                <p className="tickets"> Active Duty in Uniform and Guests Free </p>
                            </div>
                            <div className="hours">
                                <h3 className="museum-header3"> Hours </h3>
                                <p className="open-par">
                                    Wed.-Sat. 10 a.m - 4 p.m.
                                </p>
                            </div>
                            <div className="contact">
                                <h3 className="museum-header3"> Contact </h3>
                                <a className="tickets ticket-link" href="https://www.google.com/maps/dir//34.6920737,-86.5862128/@34.692074,-86.586213,15z?hl=en-US" target="_blank" rel="noopener noreferrer"> 
                                    2060A Airport Road, <br/> Huntsville, AL 35801
                                </a> 
                                <a className="tickets ticket-link" href="tel:2568833737"> (256) 883-3737 </a> 
                                <a className="tickets ticket-link" href="mailto:info@memorialmuseum.org"> info@memorialmuseum.org </a> 
                            </div>
                        </div>
                        </div>
                    </div>
                :null }

                {this.state.open3
                    ? <div className="popup-container" id="lowe-popup">
                        <div className="popupCloseButton" onClick={this.closeLowe}>X</div>
                        <h2 className="museum-header2">Lowe Mill Arts & Entertainment</h2>
                        <div className="slideshow-container">
                            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} transitionTime={350} interval={5000} dynamicHeight>
                                <div>
                                    <img className="museum-image" src={lowe1} alt="Lowe Slide 1"/>
                                </div>
                                <div>
                                    <img className="museum-image" src={lowe2} alt="Lowe Slide 2"/>
                                </div>
                                <div>
                                    <img className="museum-image" src={lowe3} alt="Lowe Slide 3"/>
                                </div>
                                <div>
                                    <img className="museum-image" src={lowe4} alt="Lowe Slide 4"/>
                                </div>
                            </Carousel>
                        </div>

                        <p className="museum-par">
                            Lowe Mill ARTS & Entertainment is the largest privately owned arts facility in the United States. With a focus on visual arts, this huge historic factory building has been redeveloped 
                            into 148 working studios for over 200 artists, makers and independent businesses, 6 fine art galleries, a multi-use theatre, and performance venues.
                        </p>
                        <div className="museum-row">
                            <div className="hours">
                                <h3 className="museum-header3"> Hours </h3>
                                <p className="open-par">
                                    Wednesday: 12 pm - 6 pm 
                                </p>
                                <p className="open-par">
                                    Thursday: 12 pm - 6 pm 
                                </p>
                                <p className="open-par">
                                    Friday: 12 pm - 8 pm 
                                </p>
                                <p className="open-par">
                                    Saturday: 10 am - 6 pm
                                </p>
                            </div>
                            <div className="contact">
                                <h3 className="museum-header3"> Contact </h3>
                                <a className="tickets ticket-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Lowe+Mill+ARTS+%26+Entertainment/@34.715145,-86.5992317,17z/data=!3m1!4b1!4m5!3m4!1s0x88626cbcc84ca9cb:0xdc939ac21cd9db2f!8m2!3d34.715145!4d-86.597043"> 
                                    2211 Seminole Dr SW, <br/> Huntsville, AL 35805 
                                </a> 
                                <a className="tickets ticket-link" href="tel:2565330399"> (256) 533-0399 </a>
                                <a className="tickets ticket-link" href="mailto:marciafreeland@lowemill.net"> marciafreeland@lowemill.net </a>
                            </div>
                        </div>
                    </div>
                : null }

                {this.state.open4
                    ? <div className="popup-container" style={{display: 'block'}} id="art-popup">
                        <div className="popupCloseButton" onClick={this.closeArt}> X </div>
                        <h2 className="museum-header2"> Huntsville Museum of Art </h2>

                        <div className="slideshow-container">
                            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} transitionTime={350} interval={5000} dynamicHeight>
                                <div>
                                    <img className="museum-image" src={art1} alt="U.S. Space and Rocket Center " />
                                </div>
                                <div>
                                    <img className="museum-image" src={art2} alt="U.S. Space and Rocket Center" />
                                </div>
                                <div>
                                    <img className="museum-image" src={art3} alt="U.S. Space and Rocket Center" />
                                </div>
                                <div>
                                    <img className="museum-image" src={art4} alt="U.S. Space and Rocket Center" /> 
                                </div>
                            </Carousel>
                        </div>

                        <p className="museum-par">
                            The Huntsville Museum of Art, North Alabama’s leading visual arts center, moved to its beautiful facility in Big Spring International Park in March 1998. 
                            The nationally-accredited Museum fills its thirteen galleries with a variety of exhibitions throughout the year, including prestigious traveling exhibits 
                            and the work of nationally and regionally acclaimed artists.
                        </p>
                        <div className="museum-row">
                            <div className="admission">
                                <h3 className="museum-header3"> Admission </h3>
                                <p className="tickets"> $12 Adults </p>
                                <p className="tickets"> $5 Children (Ages 6-11) </p>
                                <p className="tickets"> $5 Students </p>
                                <p className="tickets"> $10 Seniors (Ages 60+) </p>
                                <p className="tickets"> $10 Military & Educators </p>
                                <p className="tickets"> Children under 6 are FREE </p>
                            </div>
                            <div className="hours">
                                <h3 className="museum-header3"> Hours </h3>
                                <p className="open-par">
                                    <strong>Sunday: </strong> 12 p.m. - 5 p.m. <br/>
                                    <strong>Monday:</strong> closed <br/>
                                    <strong>Tuesday:</strong> 10 a.m. - 5 p.m. <br/>
                                    <strong>Wednesday:</strong> 10 a.m. - 5 p.m. <br/>
                                    <strong>Thursday:</strong> 10 a.m. - 8 p.m. <br/>
                                    <strong>Friday:</strong> 10 a.m. - 5 p.m. <br/>
                                    <strong>Saturday:</strong> 10 a.m. - 5 p.m.
                                </p>
                            </div>
                            <div className="contact">
                                <h3 className="museum-header3"> Contact </h3>
                                <a className="tickets  ticket-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Huntsville+Museum+of+Art/@34.727147,-86.589421,17z/data=!4m5!3m4!1s0x88626b565417d617:0xf8a215b610c54699!8m2!3d34.7271426!4d-86.5872323"> 
                                    300 Church St SW, <br/> Huntsville, AL 35801 
                                </a>
                                <a className="tickets ticket-link" href="tel:2565354350"> (256) 535-4350 </a>
                                <a className="tickets ticket-link" href="mailto:info@hsvmuseum.org"> info@hsvmuseum.org </a>
                            </div>
                        </div>
                    </div>
                : null }

                {this.state.open5 
                    ? <div className="popup-container" id="depot-popup">
                        <div className="popupCloseButton" onClick={this.closeDepot}> X </div>
                        <h2 className="museum-header2"> Huntsville Depot Museum </h2>

                        <div className="slideshow-container">
                            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} transitionTime={350} interval={5000} dynamicHeight>
                                <div>
                                    <img className="museum-image" src={depot1} alt="Depot Slide"/>
                                </div>
                                <div>
                                    <img className="museum-image" src={depot2} alt="Depot Slide 2"/>
                                </div>
                                <div>
                                    <img className="museum-image" src={depot3} alt="Depot Slide 3"/>
                                </div>
                                <div>
                                    <img className="museum-image" src={depot4} alt="Depot Slide 4"/>
                                </div>
                            </Carousel>
                        </div>

                        <p className="museum-par">
                            Hear the rattle of the tracks and the engineer’s whistle as you experience life on the rails in 1860. Listed on the National Register of Historic Places, the Depot 
                            served as the local passenger house & the corporate offices for the eastern division of the Memphis & Charleston Railroad. An active passenger station until 1968, 
                            the original depot building stands as a symbol of Huntsville’s transportation history & city growth.  The Depot grounds are open free to the public from 9am-5pm each 
                            day.
                        </p>
                        <div className="museum-row">
                            <div className="admission">
                                <h3 className="museum-header3"> Admission </h3>
                                <p className="tickets"> Grounds Pass <strong> ~ $5 </strong> </p>
                                <p className="tickets"> Tour <strong> ~ $10 </strong> </p>
                            </div>
                            <div className="hours">
                                <h3 className="museum-header3"> Hours </h3>
                                <p className="open-par">
                                    <strong>Wednesday-Saturday</strong> 
                                    <br/> 10 a.m. - 3 p.m.
                                </p>
                            </div>
                            <div className="contact">
                                <h3 className="museum-header3"> Contact </h3>
                                <a className="tickets ticket-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Huntsville+Depot+Museum/@34.7345082,-86.5929602,17z/data=!3m1!4b1!4m5!3m4!1s0x88626b50ecbe5519:0xf330839d70fe7457!8m2!3d34.7345038!4d-86.5907715">
                                    320 Church St NW, <br/> Huntsville, AL 35801
                                </a> 
                                <a className="tickets ticket-link" href="tel:2565648100"> (256) 564-8100 </a>
                                <a className="tickets ticket-link" href="mailto:hsvearlyworks@huntsvilleal.gov"> hsvearlyworks@huntsvilleal.gov </a>
                            </div>
                        </div>
                    </div>
                : null }
            </div>
        )
    }
}

export default Museums;