import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Museums from './Museums';
import Partners from './Partners';
import Contact from './Contact';
import Hotels from './Hotels';
import Nature from './Nature';
import Footer from './Footer';
import News from './News';
import Events from './Events';
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
          <Route path="/partners" component={Partners} />
          <Route path="/contact" component={Contact} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/nature" component={Nature} />
          <Route path="/news" component={News} />
          <Route path="/events" component={Events} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
