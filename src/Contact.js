import React from 'react';
import logo from './images/whitfieldMediaLogo.png';
import './css/contact.css';

class Contact extends React.Component{
    render() {
        return (
            <div>
                <div className="contact-top">
                    <div className="contact-top-row">
                        <div className="contact-column1">
                            <a href="http://www.wemakeads.com" className="header-holder">
                                <h1 className="contact-header"> WHITFIELD MEDIA </h1>
                            </a>
                            <a href="http://www.wemakeads.com">
                                <img src={logo} className="contact-logo" alt="Whitfield Media Logo"/>
                            </a>
                        </div>
                        <div className="contact-top-column">
                            <a className="top-row" href="https://www.facebook.com/My-Local-Huntsville-663263420788574" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-facebook-square fa-lg"></i> <h3 className="contact-header3"> Follow Us! </h3>
                            </a>
                            <a className="top-row" href="mailto:steve@wemakeads.com">
                                <i className="fas fa-envelope fa-lg"></i> <h3 className="contact-header3"> steve@wemakeads.com </h3>
                            </a>
                            <a className="top-row" href="tel:6623907878">
                                <i className="fas fa-phone fa-lg"></i> <h3 className="contact-header3"> (662) 390-7878 </h3>
                            </a>
                            <a className="top-row" href="http://www.wemakeads.com" target="_blank" rel="noreferrer noopener">
                                <i className="fas fa=external-link-alt fa-lg"></i> <h3 className="contact-header3"> www.wemakeads.com </h3>
                            </a>
                        </div>
                    </div>
                    <h2 className="contact-header2"> If you have any questions or want to partner with us, give us a call or shoot us a email using the form below! </h2>
                </div>
                <form id="formContainer" action="https://formspree.io/steve@wemakeads.com" method="POST">
                    <div className="contactRow">
                        <div className="contactColumn">
                            <label htmlFor="form_name" className="form_label"><i className="far fa-user"></i></label>
                            <input type="text" name="name" className="input" placeholder="NAME*"/>
                        </div>
                        <div className="contactColumn">
                            <label htmlFor="form_email" className="form_label"><i className="far fa-envelope"></i></label>
                            <input type="text" name="email" className="input" placeholder="EMAIL*"/>
                        </div>
                    </div>
                    <div className="contactRow">
                        <div className="contactColumn">
                            <label htmlFor="form_date" className="form_label"><i className="fas fa-briefcase"></i></label>
                            <input type="text" name="company" className="input" placeholder="COMPANY" />
                        </div>
                        <div className="contactColumn">
                            <label htmlFor="form_number" className="form_label"><i className="fas fa-phone"></i></label>
                            <input type="tel" name="phone" className="input" placeholder="PHONE NUMBER" />
                        </div>
                    </div>
                    <div className="message_row">
                        <label htmlFor="form_message" className="form_label"><i className="fas fa-envelope"></i></label>
                        <input type="text" name="message" className="message_input" placeholder="MESSAGE*" />
                    </div>
                    <div className="contactRow">
                        <button id="form-button"><i className="far fa-paper-plane"></i> SEND </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact;