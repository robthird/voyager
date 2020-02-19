import React from 'react';
//import logo from './logo.svg';
//Add Routing in order to change pages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Import Pages
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';



function App() {
  return (
    //Creates a Div to wrap components
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
