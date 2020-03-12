import React, { useEffect, Suspense } from 'react';
import coffee from './icons/coffee.svg';
import wifi from './icons/wifi.svg';
import swim from './icons/swimming.svg';
import weights from './icons/weights.svg';
import dog from './icons/dog.svg';
import wine from './icons/wine.svg';
import bus from './icons/bus.svg';
import { Helmet } from 'react-helmet';
import './css/hotels.css';

export default function Hotels() {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div className="hotel-page">
            <Helmet>
                <meta charSet="utf-8"/>
                <title> Best Hotels in Huntsville Alabama </title>
                <link rel="canonical"
                    href="https://www.mylocalhuntsville.com/hotels"/>
                <meta name="description"
                    content="Visiting Huntsville Alabama? We have partnered with Hilton to provide you the best stay while you're in town." />
            </Helmet>
            <div className="hotel-mid">
                <div className="video-wrapper">
                    <div className="hotel-row">
                        <iframe className="hotel-video" 
                                src="https://player.vimeo.com/video/330781968" 
                                title="Home2 Suites Hunstville Research Park Area - My Local Huntsville - Huntsville Alabama" 
                                allowFullScreen 
                                frameBorder="0">
                        </iframe>
                        <div className="video-column">
                            <h2 className="hotel-header2"> Home2 Suites Huntsville Research Park Area </h2>
                            <a className="hotel-website-link" href="https://www.hilton.com/en/hotels/hsvrpht-home2-suites-huntsville-research-park-area-al/?SEO_id=GMB-HT-HSVRPHT" target="_blank" rel="noopener noreferrer"> Find a Room </a>
                            <a className="link-row" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/7010+Cabela+Dr,+Huntsville,+AL+35806/@34.6969448,-86.6888094,12.99z/data=!4m5!3m4!1s0x88626ebef5a86c77:0x268c627ded913d2a!8m2!3d34.7097493!4d-86.6776396">
                            <p className="hotel-address-link">
                                7010 Governors West NW, Huntsville, AL 35806
                            </p>
                            </a>
                            <div className="included-holder">
                                <div className="icon-holder">
                                    <img src={coffee} className="icon" alt="hot cup of coffee - My Local Huntsville" />
                                    <h4 className="hotel-header4"> Breakfast </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={wifi} className="icon" alt="wifi - My Local Huntsville" />
                                    <h4 className="hotel-header4"> Wifi </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={swim} className="icon" alt="swimming - My Local Huntsville" />
                                    <h4 className="hotel-header4"> Pool </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={weights} className="icon" alt="weights - My Local Huntsville" />
                                    <h4 className="hotel-header4"> Fitness </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={dog} className="icon" alt="dog - My Local Huntsville" />
                                    <h4 className="hotel-header4"> Pet Friendly Rooms </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="video-wrapper">
                    <div className="hotel-row">
                        <Suspense fallback={<div> Loading... </div> }>
                            <iframe className="hotel-video" 
                                src="https://player.vimeo.com/video/310377975" 
                                title="Homewood Suites Huntsville Village of Providence - My Local Huntsville - Huntsville Alabama" 
                                allowFullScreen 
                                frameBorder="0">
                            </iframe>
                        </Suspense>
                        <div className="video-column">
                            <h2 className="hotel-header2"> Homewood Suites Huntsville Village of Providence </h2>
                            <a className="hotel-website-link" href="https://homewoodsuites3.hilton.com/en/hotels/alabama/homewood-suites-by-hilton-huntsville-village-of-providence-HSVHWHW/index.html" target="_blank" rel="noopener noreferrer"> Find a Room </a>
                            <a className="link-row" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Homewood+Suites+by+Hilton+Huntsville-Village+of+Providence/@34.7378728,-86.7203687,12.13z/data=!4m5!3m4!1s0x8862691853a805e1:0xbe1144b0445062bd!8m2!3d34.7541967!4d-86.6940862">
                                <p className="hotel-address-link"> 15 Town Center Drive, Huntsville, AL 35806 </p>
                            </a>
                            <div className="included-holder">
                                <div className="icon-holder">
                                    <img src={coffee} className="icon" alt="hot cup of coffee - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Breakfast </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={wifi} className="icon" alt="wifi - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Wifi </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={swim} className="icon" alt="swimming - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Pool </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={weights} className="icon" alt="weights - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Fitness </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={wine} className="icon" alt="wine glass - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Bar </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="video-wrapper">
                    <div className="hotel-row">
                        <Suspense fallback={<div> Loading... </div> }>
                            <iframe className="hotel-video" 
                                src="https://player.vimeo.com/video/294020980" 
                                title="Homewood Suites Downtown Huntsville - My Local Huntsville - Huntsville Alabama" 
                                allowFullScreen 
                                frameBorder="0">
                            </iframe>
                        </Suspense>
                        <div className="video-column">
                            <h2 className="hotel-header2"> Homewood Suites Downtown Huntsville  </h2>
                            <a className="hotel-website-link" href="https://homewoodsuites3.hilton.com/en/hotels/alabama/homewood-suites-by-hilton-huntsville-downtown-al-HSVGSHW/index.html?SEO_id=GMB-HW-HSVGSHW" target="_blank" rel="noopener noreferrer">
                                Find a Room
                            </a>
                            <a className="link-row" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir//Homewood+Suites+by+Hilton+Huntsville-Downtown,+AL,+714+Gallatin+St+SW,+Huntsville,+AL+35801/@34.7264627,-86.5929367,14.64z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88626cab00dd9349:0xf407a52b83dc84f3!2m2!1d-86.5826176!2d34.7225728!3e0">
                                <p className="hotel-address-link"> 714 Gallatin Street SW, Huntsville AL 35801 </p>
                            </a>
                            <div className="included-holder">
                                <div className="icon-holder">
                                    <img src={coffee} className="icon" alt="hot cup of coffee - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Breakfast </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={wifi} className="icon" alt="wifi - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Wifi </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={swim} className="icon" alt="swimming - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Pool </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={weights} className="icon" alt="weights - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Fitness </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={wine} className="icon" alt="wine glass - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Bar </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="video-wrapper">
                    <div className="hotel-row">
                        <Suspense fallback={<div> Loading... </div> }>
                            <iframe className="hotel-video" 
                                src="https://player.vimeo.com/video/298656250" 
                                title="Hampton Inn Madison/Huntsville Airport - My Local Huntsville - Huntsville Alabama" 
                                allowFullScreen 
                                frameBorder="0">
                            </iframe>
                        </Suspense>
                        <div className="video-column">
                            <h2 className="hotel-header2"> Hampton Inn Madison Huntsville Airport </h2>
                            <a className="hotel-website-link" href="https://hamptoninn3.hilton.com/en/hotels/alabama/hampton-inn-madison-huntsville-airport-HSVMSHX/index.html" target="_blank" rel="noopener noreferrer"> Find a Room </a>
                            <a className="link-row" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir//Hampton+Inn+Madison+Huntsville+Airport,+9225+Madison+Blvd,+Madison,+AL+35758/@34.6392916,-86.8739938,11.38z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8862656cb80f3f09:0x8903208e66471b22!2m2!1d-86.7609751!2d34.6717167!3e0">
                                <p className="hotel-address-link"> 9225 Madison Blvd, Madison, AL 35758 </p>
                            </a>
                            <div className="included-holder">
                                <div className="icon-holder">
                                    <img src={coffee} className="icon" alt="hot cup of coffee - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Breakfast </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={wifi} className="icon" alt="wifi - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Wifi </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={swim} className="icon" alt="swimming - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Pool </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={weights} className="icon" alt="weights - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Fitness </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={bus} className="icon" alt="shuttle bus - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Airport Shuttle </h4>
                                </div>
                            </div>
                            <button className="button">
                                <a className="button-link" target="_blank" rel="noopener noreferrer" href="https://hamptoninn3.hilton.com/en/hotels/alabama/hampton-inn-madison-huntsville-airport-HSVMSHX/index.html">
                                    Find a Room
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="video-wrapper">
                    <div className="hotel-row">
                        <Suspense fallback={<div> Loading... </div> }>
                            <iframe className="hotel-video" 
                                src="https://player.vimeo.com/video/301915346" 
                                title="Hampton Inn Huntsville Reasearch Park - My Local Huntsville - Huntsville Alabama" 
                                allowFullScreen 
                                frameBorder="0">
                            </iframe>
                        </Suspense>
                        <div className="video-column">
                            <h2 className="hotel-header2"> 
                                Hampton Inn Huntsville Research Park 
                            </h2>
                            <a className="hotel-website-link" 
                                href="https://hamptoninn3.hilton.com/en/hotels/alabama/hampton-inn-and-suites-huntsville-research-park-area-HSVHRHX/index.html" 
                                target="_blank" 
                                rel="noopener noreferrer"> 
                                Find a Room 
                            </a>
                            <a className="link-row" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="https://www.google.com/maps/dir//Hampton+Inn+%26+Suites+Huntsville%2FResearch+Park+Area,+7010+Governors+W+Drive,+Huntsville,+AL+35806/@34.7079621,-86.6938221,12.44z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88626eebb9e753c3:0x847d48b8307bd93a!2m2!1d-86.6779221!2d34.7092427!3e0">
                                <p className="hotel-address-link"> 
                                    7010 Cabela Drive, Huntsville, AL 35806 
                                </p>
                            </a>
                            <div className="included-holder">
                                <div className="icon-holder">
                                    <img src={coffee} 
                                        className="icon" 
                                        alt="hot cup of coffee - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> 
                                        Breakfast 
                                    </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={wifi} 
                                        className="icon" 
                                        alt="wifi - My Local Hunstville" />
                                    <h4 className="hotel-header4"> 
                                        Wifi 
                                    </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={swim} className="icon" alt="swimming - My Local Hunstville" />
                                    <h4 className="hotel-header4"> Pool </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={weights} className="icon" alt="weights - My Local Hunstville" />
                                    <h4 className="hotel-header4"> Fitness </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="video-wrapper">
                    <div className="hotel-row">
                        <Suspense fallback={<div> Loading... </div> }>
                            <iframe className="hotel-video" 
                                src="https://player.vimeo.com/video/393772315" 
                                title="Hampton Inn Huntsville Reasearch Park - My Local Huntsville - Huntsville Alabama" 
                                allowFullScreen 
                                frameBorder="0">
                            </iframe>
                        </Suspense>
                        <div className="video-column">
                            <h2 className="hotel-header2"> Home2 Suites Decatur Ingalls Harbor </h2>
                            <a className="hotel-website-link" href="https://www.hilton.com/en/hotels/dcuwsht-home2-suites-decatur-ingalls-harbor/?SEO_id=GMB-HT-DCUWSHT" target="_blank" rel="noopener noreferrer"> Find a Room </a>
                            <a className="link-row" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/807+Island+Way+NW,+Decatur,+AL+35601/@34.6230861,-86.9947222,17z/data=!4m5!3m4!1s0x886285c33296d32d:0x4aa155a4d32fd8d1!8m2!3d34.6230861!4d-86.9925335">
                                <p className="hotel-address-link"> 807 Island Way NW, Decatur, Alabama 35601 </p>
                            </a>
                            <div className="included-holder">
                                <div className="icon-holder">
                                    <img src={coffee} className="icon" alt="hot cup of coffee - My Local Hunstville"/>
                                    <h4 className="hotel-header4"> Breakfast </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={wifi} className="icon" alt="wifi - My Local Hunstville" />
                                    <h4 className="hotel-header4"> Wifi </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={swim} className="icon" alt="swimming - My Local Hunstville" />
                                    <h4 className="hotel-header4"> Pool </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={weights} className="icon" alt="weights - My Local Hunstville" />
                                    <h4 className="hotel-header4"> Fitness </h4>
                                </div>
                                <div className="icon-holder">
                                    <img src={dog} className="icon" alt="dog - My Local Huntsville" />
                                    <h4 className="hotel-header4"> Pet Friendly Rooms </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}