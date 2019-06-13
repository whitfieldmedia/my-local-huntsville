import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/mlhlogo.png';
import './css/nav.css';

class Nav extends React.Component{
  state = {
    slide: 0,
    slide2: 0,
    lastScrollY: 0,
    isClicked: false,
    class: 'closed',
    class2: 'toggle-closed',
    isClicked2: false,
    dropdown: 'closed'
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if ( currentScrollY > lastScrollY ) {
      this.setState({ slide: '-180px', slide2: '-80px' })
    } else {
      this.setState({ slide: '0px', slide2: '0' })
    }
    this.setState({ lastScrollY: currentScrollY });
  }
  handleClick = () => {
    if(!this.state.isClicked) {
      console.log('open')
      this.setState({
        isClicked: true,
        class: 'open',
        class2: 'toggle-open'
      })
    } else {
      console.log('closed')
      this.setState({
        isClicked: false,
        class: 'closed',
        class2: 'toggle-closed'
      })
    }
  }

  handleClick2 = () => {
    if(!this.state.isClicked2) {
      this.setState({
        isClicked2: true,
        dropdown: 'dropdown-open'
      })
    } else {
      this.setState({
        isClicked2: false,
        dropdown: 'dropdown-closed'
      })
    }
  }
  handleClose = () => {
    this.setState({
      isClicked: false,
      isClicked2: false,
      class: 'closed',
      class2: 'toggle-closed',
      dropdown: 'dropdown-closed'
    })
  }

  render() {
    return (
      <div>
        <header className="navbar nav-down" style={{ transform: `translate(0, ${this.state.slide})`, transition: 'transform 200ms linear' }} id="navbar">
          <div className="nav-top-row">
            <div className="nav-top-column">
              <img className="nav-top-logo" src={logo} alt="My Local Huntsville"/>
            </div>
            <div className="nav-top-column2">
              <a className="top-nav-icon" href="tel:6623907878"> <i className="fas fa-phone fa-lg"></i> (662) 390-7878 </a>
              <a className="top-nav-icon" href="mailto:steve@wemakeads.com"> <i className="far fa-envelope fa-lg"></i> steve@wemakeads.com </a>
              <a className="top-nav-icon" href="https://www.facebook.com/My-Local-Huntsville-663263420788574"> <i className="fab fa-facebook-square fa-lg"></i> Follow Us! </a>
            </div>
          </div>
          <div className="nav-row">
          <Link className="logo" to="/"> My Local Huntsville </Link>
            <span className="navbar-toggle" id="js-navbar-toggle"> <i id="open" className="fas fa-bars"></i> </span>
            <ul className="main-nav" id="js-menu">
              <li className="nav-link">
                <Link className="nav-links" id="homeLink" to="/"> HOME </Link>
              </li>
              <li className="dropdown">
                <div className="dropbtn"> ATTRACTIONS </div>
                <div className="dropdown-content" id="dropdown-content">
                  <Link className="dropdown-link" to="/museums"> MUSEUMS </Link>
                  <Link className="dropdown-link" to="/nature"> NATURE </Link>
                </div>
              </li>
              <li className="nav-link">
                <Link className="nav-links" id="hotelLink" to="/hotels"> HOTELS </Link>
              </li>
              <li className="nav-link">
                <Link className="nav-links" id="aboutLink" to="/partners"> PARTNERS </Link>
              </li>
              <li className="nav-link">
                <Link className="nav-links" id="eventLink" to="/events">EVENTS</Link>
              </li>
              <li className="nav-link">
                <Link className="nav-links" id="contactLink" to="/contact"> CONTACT </Link>
              </li>
            </ul>
          </div>
        </header>
        <header className="navbar2 nav-down2" style={{ transform: `translate(0, ${this.state.slide2})`, transition: 'transform 200ms linear' }}>
            <Link className="logo2-holder" onClick={this.handleClose} to="/"> 
              <img src={logo} className="nav-top-logo2" alt="My Local Huntsville"/>
            </Link>
            <span className={this.state.class2} id="js-navbar-toggle" onClick={this.handleClick}> <i id="open" className="fas fa-bars"></i></span>
            <ul className={this.state.class} id="js-menu">
              <li onClick={this.handleClose} className="nav-link">
                <Link onClick={this.handleClose} className="nav-links" id="homeLink" to="/"> HOME </Link>
              </li>
              <li className="dropdown">
                <div className="dropbtn" onClick={this.handleClick2}> ATTRACTIONS </div>
                <div className={this.state.dropdown} id="dropdown-content">
                  <Link onClick={this.handleClose} className="dropdown-link" to="/museums"> MUSEUMS </Link>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/nature"> NATURE </Link>
                </div>
              </li>
              <li onClick={this.handleClose} className="nav-link">
                <Link onClick={this.handleClose} className="nav-links" id="hotelLink" to="/hotels"> HOTELS </Link>
              </li>
              <li onClick={this.handleClose} className="nav-link">
                <Link onClick={this.handleClose} className="nav-links" id="aboutLink" to="/partners"> PARTNERS </Link>
              </li>
              <li className="nav-link">
                <Link className="nav-links" id="eventLink" to="/events">EVENTS</Link>
              </li>
              <li onClick={this.handleClose} className="nav-link">
                <Link onClick={this.handleClose} className="nav-links" id="contactLink" to="/contact"> CONTACT </Link>
              </li>
            </ul>
        </header>
      </div>
    )
  }
}

export default Nav;