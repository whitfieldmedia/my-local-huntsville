import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Museums from './Museums';
import Contact from './Contact';
import Hotels from './Hotels';
import Nature from './Nature';
import Footer from './Footer';
import News from './News';
import Beats from './Beats';
import Eats from './Eats';
import Streets from './Streets';
import Gallery from './Gallery';
import Events from './Events';
import Living from './Living';
import { Switch, Route } from 'react-router-dom';
import './css/styles.css';

class App extends React.Component{
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/museums" component={Museums} />
          <Route path="/contact" component={Contact} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/nature" component={Nature} />
          <Route path="/news" component={News} />
          <Route path="/beats" component={Beats} />
          <Route path="/eats" component={Eats} />
          <Route path="/streets" component={Streets} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/events" component={Events} />
          <Route path="/living-in-huntsville" component={Living} />
        </Switch> 
        <Footer />
      </div>
    )
  }
}

export default App;
