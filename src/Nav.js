import React from 'react';
import { Link } from 'react-router-dom';
import './css/nav.css';
import mlh from './icons/MyLocalHuntsville_Logo2.png';

class Nav extends React.Component{
  state = {
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
    hoverExplore: false,
    hoverSeb: false,
    hoverStay: false
  }

  handleClick = () => {
    if(!this.state.isClicked) {
      this.setState({
        isClicked: true,
        class: 'open',
        class2: 'toggle-open'
      })
    } else {
      this.setState({
        isClicked: false,
        class: 'closed',
        class2: 'toggle-closed'
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
  enterExplore = () => {
    this.setState({
      hoverExplore: true,
      hoverStay: false,
      hoverSeb: false,
    })
  }
  enterSeb = () => {
    this.setState({
      hoverSeb: true,
      hoverStay: false,
      hoverExplore: false,
    })
  }
  enterStay = () => {
    this.setState({
      hoverStay: true,
      hoverExplore: false,
      hoverSeb: false
    })
  }
  closeHover = () => {
    this.setState({
      hoverStay: false,
      hoverExplore: false,
      hoverSeb: false
    })
  }
  render() {
    return (
      <div>
        <header className="navbar" onMouseLeave={this.closeHover}>
          <div className="nav-top-row" onMouseEnter={this.closeHover}>
            <div className="nav-top-column2" onMouseEnter={this.closeHover}>
              <a className="top-nav-icon" href="tel:6623907878"> <i className="fas fa-phone"></i></a>
              <a className="top-nav-icon" href="mailto:steve@wemakeads.com"> <i className="far fa-envelope"></i> </a>
              <a className="top-nav-icon" href="https://www.facebook.com/My-Local-Huntsville-663263420788574" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook-square"></i> </a>
              <Link to="/contact" className="top-nav-icon"> CONTACT </Link>
            </div>
          </div>
          <div className="nav-line"></div>
            <ul className="main-nav" id="main-nav">
              <Link onMouseEnter={this.closeHover} to="/"> <img id="mlh-icon" src={mlh} alt=""/> </Link>
              <li className="dropdown">
                <Link onMouseEnter={this.closeHover} className="dropbtn" to="/events"> EVENTS </Link>
              </li>
              <li className="dropdown" onMouseEnter={this.enterExplore} >
                <div className="dropbtn"> EXPLORE </div>
              </li>
              <li className="dropdown">
                <div className="dropbtn" onMouseEnter={this.enterSeb}> THINGS TO DO </div>
              </li>
              <li className="dropdown">
                <Link className="dropbtn" onMouseEnter={this.closeHover} to="/hotels"> HOTELS </Link>
              </li>
            </ul>
            <ul className={this.state.hoverExplore ? "dropdown-row": "dropdown-row-closed"} onMouseEnter={this.enterExplore}>
              <li>
                <Link onClick={this.closeHover} className="dropdown-link" to="/gallery"> GALLERY <i className="material-icons"> keyboard_arrow_right </i> </Link>
              </li>
              <li>
                <Link onClick={this.closeHover} className="dropdown-link" to="/museums"> MUESEUMS<i className="material-icons"> keyboard_arrow_right </i> </Link>
              </li>
              <li>
                <Link onClick={this.closeHover} className="dropdown-link" to="/nature"> NATURE<i className="material-icons"> keyboard_arrow_right </i> </Link>
              </li>
              <li>
                <Link onClick={this.closeHover} className="dropdown-link" to="/living-in-huntsville">
                  LIVING IN HUNTSVILLE
                  <i className="material-icons"> keyboard_arrow_right </i>
                </Link>
              </li>
            </ul>
            <ul className={this.state.hoverSeb ? "dropdown-row": "dropdown-row-closed" } onMouseEnter={this.enterSeb}>
              <li>
                <Link onClick={this.closeHover} className="dropdown-link" to="/activities"> ACTIVITIES <i className="material-icons"> keyboard_arrow_right </i> </Link>
              </li>
              <li>
                <Link onClick={this.closeHover} className="dropdown-link" to="/food"> FOOD <i className="material-icons"> keyboard_arrow_right </i> </Link>  
              </li>
              <li>
                <Link onClick={this.closeHover} className="dropdown-link" to="/bars"> BARS <i className="material-icons"> keyboard_arrow_right </i> </Link>
              </li>
            </ul>
            <ul className={this.state.hoverStay ? "dropdown-row" : "dropdown-row-closed"} onMouseEnter={this.enterStay}>
              <li>
                <Link onClick={this.closeHover} id="hotel-link" className="dropdown-link" to="/hotels"> HOTELS<i className="material-icons"> keyboard_arrow_right </i> </Link>
              </li>
            </ul>
        </header>
        <header className="navbar2 nav-down2" style={{ transform: `translate(0, ${this.state.slide2})`, transition: 'transform 200ms linear' }}>
            <span className={this.state.class2} onClick={this.handleClick}> {!this.state.isClicked ? <i id="open" className="fas fa-bars"></i> : null }</span>
            <Link className="logo-holder2" to="/" onClick={this.handleClose}>
              <img src={mlh} id="mlh-icon-small" alt="My Local Huntsville"/>
            </Link>
            <ul className={this.state.class}>
              <li onClick={this.handleClose}>
                <p className="nav-x"> X </p>
              </li>
              <li onClick={this.handleClose} className="openLogo">
                <Link to="/" id="mlh-icon-link-open"> <img src={mlh} alt="My Local Huntsville"/> </Link>
              </li>
              <li className="dropdown">
                <Link className="dropbtn" to="/events" onClick={this.handleClose}> EVENTS </Link>
              </li>
              <li className="dropdown">
                <div className="dropbtn" onClick={this.handleClick3}> EXPLORE NORTH ALABAMA <i className="material-icons"> arrow_drop_down </i> </div>
                <div className={this.state.dropdown3}>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/gallery"> GALLERY </Link>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/museums"> MUSEUMS </Link>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/nature"> NATURE </Link>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/living-in-huntsville"> LIVING IN HUNTSVILLE </Link>
                </div>
              </li>
              <li className="dropdown">
                <div className="dropbtn" onClick={this.handleClick4}> THINGS TO DO <i className="material-icons"> arrow_drop_down </i> </div>
                <div className={this.state.dropdown4}>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/activities"> ACTIVITIES </Link>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/food"> FOOD </Link>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/bars"> BARS </Link>
                </div>
              </li>
              <li className="dropdown">
                <Link className="dropbtn" to="/hotels" onClick={this.handleClose}> HOTELS </Link>
              </li>
              <li onClick={this.handleClose} className="dropbtn">
                <Link onClick={this.handleClose} className="dropdown-link" to="/contact"> CONTACT </Link>
              </li>
            </ul>
        </header>
      </div>
    )
  }
}

export default Nav;