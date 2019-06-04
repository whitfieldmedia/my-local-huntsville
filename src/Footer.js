import React from 'react';
import './css/footer.css';

class Footer extends React.Component{
    render() {
        return(
            <div id="footerWrapper">
                <footer className="footer">
                    <a className="icon" href="mailto:steve@wemakeads.com"> <i className="far fa-envelope fa-2x"></i> </a>
                    <a className="icon" href="https://www.facebook.com/My-Local-Huntsville-663263420788574"> <i className="fab fa-facebook-square fa-2x"></i> </a>
                </footer>
            </div>
        )
    }
}

export default Footer;