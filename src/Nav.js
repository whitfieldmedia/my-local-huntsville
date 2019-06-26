import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/HSV.png';
import './css/nav.css';

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
    isClicked6: false,
    dropdown6: 'dropdown6-closed'
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

  // handleClick2 = () => {
  //   if(!this.state.isClicked2) {
  //     this.setState({
  //       isClicked2: true,
  //       dropdown: 'dropdown-open'
  //     })
  //   } else {
  //     this.setState({
  //       isClicked2: false,
  //       dropdown: 'dropdown-closed'
  //     })
  //   }
  // }
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
  // handleClick6 = () => {
  //   if(!this.state.isClicked6) {
  //     this.setState({
  //       isClicked6: true,
  //       dropdown6: 'dropdown6-open',
  //       dropdown5: 'dropdown5-closed',
  //       dropdown4: 'dropdown4-closed',
  //       dropdown3: 'dropdown3-closed'
  //     })
  //   } else {
  //     this.setState({
  //       isClicked6: false,
  //       dropdown6: 'dropdown6-closed'
  //     })
  //   }
  // }
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
        <header className="navbar nav-down" style={{ transform: `translate(0, ${this.state.slide})`, transition: 'transform 200ms linear' }}>
          <div className="nav-top-row">
            <div className="nav-top-column2">
              <a className="top-nav-icon" href="tel:6623907878"> <i className="fas fa-phone"></i></a>
              <a className="top-nav-icon" href="mailto:steve@wemakeads.com"> <i className="far fa-envelope"></i> </a>
              <a className="top-nav-icon" href="https://www.facebook.com/My-Local-Huntsville-663263420788574" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook-square"></i> </a>
            </div>
          </div>
          <div className="nav-line"></div>
          <div className="nav-row">
          <Link className="logo" to="/"> My Local Huntsville </Link>
            <ul className="main-nav">
              <li className="logo-link">
                <Link className="logo-holder" to="/" onClick={this.handleClose}>
                  <img className="nav-top-logo" src={logo} alt="Huntsville Alabama"/>
                </Link>
              </li>
              <li className="nav-link">
                <Link className="nav-links" to="/"> HOME </Link>
              </li>
              <li className="dropdown">
                <div className="dropbtn"> LIVE </div>
                <div className="dropdown-content">
                  <Link className="dropdown-link" to="/gallery"> GALLERY </Link>
                </div>
              </li>
              <li className="nav-link">
                <Link className="nav-links" to="/work"> WORK </Link>
              </li>
              <li className="dropdown">
                <div className="dropbtn"> PLAY </div>
                <div className="dropdown-content">
                  <Link className="dropdown-link" to="/streets"> STREETS </Link>
                  <Link className="dropdown-link" to="/beats"> BEATS </Link>
                  <Link className="dropdown-link" to="/eats"> EATS </Link>
                  <Link className="dropdown-link" to="/events"> EVENTS </Link>
                </div>
              </li>
              <li className="dropdown">
                <div className="dropbtn"> VISIT </div>
                <div className="dropdown-content"> 
                  <Link className="dropdown-link" to="/hotels"> HOTELS </Link>
                  <Link className="dropdown-link" to="/museums"> MUSEUMS </Link>
                  <Link className="dropdown-link" to="/nature"> NATURE </Link>
                </div>
              </li>
              <li className="nav-link">
                <Link className="nav-links" to="/contact"> CONTACT </Link>
              </li>
            </ul>
          </div>
        </header>
        <header className="navbar2 nav-down2" style={{ transform: `translate(0, ${this.state.slide2})`, transition: 'transform 200ms linear' }}>
            <span className={this.state.class2} onClick={this.handleClick}> {!this.state.isClicked ? <i id="open" className="fas fa-bars"></i> : null }</span>
            <Link className="logo-holder2" to="/" onClick={this.handleClose}>
              <img className="nav-top-logo2" src={logo} alt="Huntsville Alabama"/>
            </Link>
            <ul className={this.state.class}>
              <li onClick={this.handleClose}>
                <p className="nav-x"> X </p>
              </li>
              <li onClick={this.handleClose} className="nav-link">
                <Link onClick={this.handleClose} className="nav-links" to="/"> HOME </Link>
              </li>
              <li className="dropdown">
                <div className="dropbtn" onClick={this.handleClick3}> LIVE </div>
                <div className={this.state.dropdown3}>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/gallery"> GALLERY </Link>
                </div>
              </li>
              <li className="nav-link">
                <Link onClick={this.handleClose} className="nav-links" to="/work"> WORK </Link>
              </li>
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
                <div className={this.state.dropdown5}> 
                  <Link onClick={this.handleClose} className="dropdown-link" to="/hotels"> HOTELS </Link>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/museums"> MUSEUMS </Link>
                  <Link onClick={this.handleClose} className="dropdown-link" to="/nature"> NATURE </Link>
                </div>
              </li>
              <li onClick={this.handleClose} className="nav-link">
                <Link onClick={this.handleClose} className="nav-links" to="/contact"> CONTACT </Link>
              </li>
            </ul>
        </header>
      </div>
    )
  }
}

export default Nav;