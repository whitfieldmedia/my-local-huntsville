import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/mlhlogo.png';
import './css/nav.css';
import bannerSmall from './bannerAd/320x100raypearman copy.jpg';
import banner from './bannerAd/930x180raypearman.jpg';

class Nav extends React.Component{
  state = {
    didScroll: true,
    lastScrollTop: 0,
    slide: 0,
    slide2: 0,
    lastScrollY: 0,
    isClicked: false,
    class: 'closed',
    class2: 'toggle-closed',
    isClicked2: false,
    dropdown: 'closed',
    isClicked3: false,
    dropdown3: 'dropdown3-closed',
    isClicked4: false,
    dropdown4: 'dropdown4-closed',
    isClicked5: false,
    dropdown5: 'dropdown5-closed',
    isClicked6: false,
    dropdown6: 'dropdown6-closed'
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const lastScrollY = this.state.lastScrollY;
    const currentScrollY = window.scrollY;
    const totalHeight = (document.documentElement.scrollHeight - window.innerHeight)
    if ( currentScrollY > lastScrollY && window.scrollY > 50) {
      this.setState({ slide: '-180px', slide2: '-80px' })
    } else {
      if( currentScrollY < totalHeight ) {
      this.setState({ slide: '0px', slide2: '0' })
      }
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
  handleClick3 = () => {
    if(!this.state.isClicked3) {
      this.setState({
        isClicked3: true,
        dropdown3: 'dropdown3-open',
        dropdown4: 'dropdown4-closed',
        dropdown5: 'dropdown5-closed',
        dropdown6: 'dropdown6-closed',
      })
    } else {
      this.setState({
        isClicked3: false,
        dropdown3: 'dropdown3-closed'
      })
    }
  }
  handleClick4 = () => {
    if(!this.state.isClicked4) {
      this.setState({
        isClicked4: true,
        dropdown4: 'dropdown4-open',
        dropdown5: 'dropdown5-closed',
        dropdown6: 'dropdown6-closed',
        dropdown3: 'dropdown3-closed'
      })
    } else {
      this.setState({
        isClicked4: false,
        dropdown4: 'dropdown4-closed'
      })
    }
  }
  handleClick5 = () => {
    if(!this.state.isClicked5) {
      this.setState({
        isClicked5: true,
        dropdown5: 'dropdown5-open',
        dropdown6: 'dropdown6-closed',
        dropdown4: 'dropdown4-closed',
        dropdown3: 'dropdown3-closed'
      })
    } else {
      this.setState({
        isClicked5: false,
        dropdown5: 'dropdown5-closed'
      })
    }
  }
  handleClick6 = () => {
    if(!this.state.isClicked6) {
      this.setState({
        isClicked6: true,
        dropdown6: 'dropdown6-open',
        dropdown5: 'dropdown5-closed',
        dropdown4: 'dropdown4-closed',
        dropdown3: 'dropdown3-closed'
      })
    } else {
      this.setState({
        isClicked6: false,
        dropdown6: 'dropdown6-closed'
      })
    }
  }
  handleClose = () => {
    this.setState({
      isClicked: false,
      isClicked2: false,
      isClicked3: false,
      isClicked4: false,
      isClicked5: false,
      isClicked6: false,
      class: 'closed',
      class2: 'toggle-closed',
      dropdown: 'dropdown-closed',
      dropdown3: 'dropdown3-closed',
      dropdown4: 'dropdown4-closed',
      dropdown5: 'dropdown5-closed',
      dropdown6: 'dropdown6-closed'
    })
  }

  render() {
    return (
      <div>
        <header className="navbar nav-down" style={{ transform: `translate(0, ${this.state.slide})`, transition: 'transform 200ms linear' }} id="navbar">
          <div className="nav-top-row">
            <div className="nav-top-column">
              <Link to="/"><img className="nav-top-logo" src={logo} alt="My Local Huntsville"/></Link>
            </div>
            <div className="nav-top-column2">
              <a className="top-nav-icon" href="tel:6623907878"> <i className="fas fa-phone fa-lg"></i> (662) 390-7878 </a>
              <a className="top-nav-icon" href="mailto:steve@wemakeads.com"> <i className="far fa-envelope fa-lg"></i> steve@wemakeads.com </a>
              <a className="top-nav-icon" href="https://www.facebook.com/My-Local-Huntsville-663263420788574" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook-square fa-lg"></i> Follow Us! </a>
            </div>
          </div>
          <div className="nav-row">
          <Link className="logo" to="/"> My Local Huntsville </Link>
            <span className="navbar-toggle" id="js-navbar-toggle"> <i id="open" className="fas fa-bars"></i> </span>
            <ul className="main-nav" id="js-menu">
              <li className="nav-link">
                <Link className="nav-links" id="homeLink" to="/"> HOME </Link>
              </li>
              {/* <li className="dropdown">
                <div className="dropbtn"> LIVE </div>
                <div className="dropdown-content">
                  <div className="dropdown-link"> REAL ESTATE </div>
                </div>
              </li> */}
              <li className="dropdown">
                <div className="dropbtn"> PLAY </div>
                <div className="dropdown-content" id="dropdown-content">
                  <Link className="dropdown-link" to="/streets"> STREETS </Link>
                  <Link className="dropdown-link" to="/beats"> BEATS </Link>
                  <Link className="dropdown-link" to="/eats"> EATS </Link>
                  <Link className="dropdown-link" to="/events"> EVENTS </Link>
                </div>
              </li>
              <li className="dropdown">
                <div className="dropbtn"> VISIT </div>
                <div className="dropdown-content" id="visit-dropdown-content"> 
                  <Link className="dropdown-link" to="/hotels"> HOTELS </Link>
                  <Link className="dropdown-link" to="/museums"> MUSEUMS </Link>
                  <Link className="dropdown-link" to="/nature"> NATURE </Link>
                </div>
              </li>
              <li className="nav-link">
                <Link className="nav-links" to="/gallery"> GALLERY </Link>
              </li>
              {/* <li className="dropdown">
                <div className="dropbtn"> WORK </div>
                <div className="dropdown-content">
                  <div className="dropdown-link">  </div>
                </div>
              </li> */}
              <li className="nav-link">
                <Link className="nav-links" id="contactLink" to="/contact"> CONTACT </Link>
              </li>
            </ul>
          </div>
          <a className="nav-bottom-row" href="https://www.raypearman.com/" target="_blank" rel="noopener noreferrer">
            <img src={banner} href="https://www.raypearman.com/" target="_blank" rel="noopener noreferrer" className="banner" alt="ray pearman banner ad"/>
          </a>
        </header>
        <header className="navbar2 nav-down2" id="navbar2" style={{ transform: `translate(0, ${this.state.slide2})`, transition: 'transform 200ms linear' }}>
            <Link className="logo2-holder" onClick={this.handleClose} to="/"> 
              <img src={logo} className="nav-top-logo2" alt="My Local Huntsville"/>
            </Link>
            <span className={this.state.class2} id="js-navbar-toggle" onClick={this.handleClick}> {this.state.isClicked ? <p className="nav-x"> X </p> : <i id="open" className="fas fa-bars"></i> }</span>
            <ul className={this.state.class} id="js-menu">
              <li onClick={this.handleClose} className="nav-link">
                <Link onClick={this.handleClose} className="nav-links" id="homeLink" to="/"> HOME </Link>
              </li>
              {/* <li className="dropdown">
                <div className="dropbtn" onClick={this.handleClick3}> LIVE </div>
                <div className={this.state.dropdown3}>
                  <div onClick={this.handleClose} className="dropdown-link"> REAL ESTATE </div>
                </div>
              </li> */}
              <li className="dropdown">
                <div className="dropbtn" onClick={this.handleClick4}> PLAY </div>
                <div className={this.state.dropdown4}>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/streets"> STREETS </Link>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/beats"> BEATS </Link>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/eats"> EATS </Link>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/events"> EVENTS </Link>
                </div>
              </li>
              <li className="dropdown">
                <div className="dropbtn" onClick={this.handleClick5}> VISIT </div>
                <div className={this.state.dropdown5} id="visit-dropdown-content"> 
                  <Link onClick={this.handleClose} className="dropdown-link" to="/hotels"> HOTELS </Link>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/museums"> MUSEUMS </Link>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/nature"> NATURE </Link>
                </div>
              </li>
              <li className="nav-link">
                <Link onClick={this.handleClose} className="nav-links" to="/gallery"> GALLERY </Link>
              </li>
              {/* <li className="dropdown">
                <div className="dropbtn" onClick={this.handleClick6}> WORK </div>
                <div className={this.state.dropdown6}>
                  <div onClick={this.handleClose} className="dropdown-link">  </div>
                </div>
              </li> */}
              <li onClick={this.handleClose} className="nav-link">
                <Link onClick={this.handleClose} className="nav-links" id="contactLink" to="/contact"> CONTACT </Link>
              </li>
            </ul>
            <a className="nav-bottom-row" href="https://www.raypearman.com/" target="_blank" rel="noopener noreferrer">
              <img src={banner} href="https://www.raypearman.com/" target="_blank" rel="noopener noreferrer" className="banner" alt="ray pearman banner ad"/>
            </a>
        </header>
      </div>
    )
  }
}

export default Nav;