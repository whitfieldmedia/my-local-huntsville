import React from 'react';
import './css/footer.css';

class Footer extends React.Component{
    render() {
        return(
            <div id="footerWrapper">
                <footer className="footer">
                    <a className="footer-icon" href="mailto:steve@wemakeads.com"> <i className="far fa-envelope fa-2x"></i> steve@wemakeads.com </a>
                    <a className="footer-icon" href="https://www.facebook.com/My-Local-Huntsville-663263420788574" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook-square fa-2x"></i> Follow Us! </a>
                    <a className="footer-icon" href="tel:6623907878"> <i className="fas fa-phone fa-lg"></i> (662) 390-7878 </a>
                </footer>
            </div>
        )
    }
}

export default Footer;