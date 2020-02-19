import React from 'react';
//import logo from './logo.svg';
//Add Routing in order to change pages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Import Pages
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';


function App() {
  return (
    //Creates a Div to wrap components via Fragment. Fragment wraps everything explicitly.
    //Added Layout via Function, passed to layout which renders props.children.
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
