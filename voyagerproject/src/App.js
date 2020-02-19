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
import { Jumbotron } from './components/Jumbotron';


function App() {
  return (
    //Creates a Div to wrap components via Fragment. Fragment wraps everything explicitly.
    //Added Layout via Function, passed to layout which renders props.children.
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
