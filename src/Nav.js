import React from 'react';
import { Link } from 'react-router-dom';
import './css/nav.css';

class Nav extends React.Component{
  state = {
    slide: 0,
    lastScrollY: 0
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
      this.setState({ slide: '-80px' })
    } else {
      this.setState({ slide: '0px' })
    }
    this.setState({ lastScrollY: currentScrollY });
  }

  render() {
    return (
      <div>
        <header className="navbar nav-down" style={{ transform: `translate(0, ${this.state.slide})`, transition: 'transform 200ms linear' }} id="navbar">
          <Link className="logo" to="/"> My Local Huntsville </Link>
          <span className="navbar-toggle" id="js-navbar-toggle"> <i id="open" className="fas fa-bars"></i> </span>
          <ul className="main-nav" id="js-menu">
            <li>
              <Link className="nav-links" id="homeLink" to="/"> HOME </Link>
            </li>
            <li className="dropdown">
              <div className="dropbtn"> ATTRACTIONS </div>
              <div className="dropdown-content" id="dropdown-content">
                <Link className="dropdown-link" to="/museums"> MUSEUMS </Link>
                <Link className="dropdown-link" to="/nature"> NATURE </Link>
              </div>
            </li>
            <li>
              <Link className="nav-links" id="hotelLink" to="/hotels"> HOTELS </Link>
            </li>
            <li>
              <Link className="nav-links" id="aboutLink" to="/partners"> PARTNERS </Link>
            </li>
            <li>
              <Link className="nav-links" id="newsLink" to="/news"> NEWS </Link>
            </li>
            <li>
              <Link className="nav-links" id="eventsLink" to="/events"> EVENTS </Link>
            </li>
            <li>
              <Link className="nav-links" id="contactLink" to="/contact"> CONTACT </Link>
            </li>
          </ul>
        </header>
      </div>
    )
  }
}

export default Nav;