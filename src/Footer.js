import React from 'react';
import mlh from './icons/MyLocalHuntsville_Logo2.png';
import './css/footer.css';

class Footer extends React.Component{
    render() {
        return(
            <div id="footerWrapper">
                <footer className="footer">
                    <div className="footer-row">
                        <img src={mlh} className="footer-logo" alt="My Local Huntsville"/>
                    </div>
                    <a className="footer-icon" 
                        href="mailto:steve@wemakeads.com"
                        aria-label="steve@wemakeads.com"> 
                        <i className="far fa-envelope fa-2x"></i> 
                        <span className="footer-text"> steve@wemakeads.com </span> 
                    </a>
                    <a className="footer-icon" 
                        href="https://www.facebook.com/My-Local-Huntsville-663263420788574" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Follow Us on Facebook!"> 
                        <i className="fab fa-facebook-square fa-2x"></i> 
                        <span className="footer-text"> Follow Us! </span>
                    </a>
                    <a className="footer-icon" 
                        href="tel:6623907878"
                        aria-label="Call Us at (662) 390-7878"> 
                        <i className="fas fa-phone fa-lg"></i> 
                        <span className="footer-text"> (662) 390-7878 </span> 
                    </a>
                    <div className="footer-row">
                        <p className="disclaimer">
                            @2020 - <strong> My Local Huntsville </strong> All rights reserved. Designed by 
                            <a href="https://www.wemakeads.com" target="_blank" rel="noopener noreferrer"> Whitfield Media </a>
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;