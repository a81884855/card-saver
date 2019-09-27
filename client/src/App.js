import React from 'react';
import AllCards from './components/AllCards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './layouts/layout';
import Home from './components/Home';
import Card from './components/Card';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Layout>
              <Home />
              {/* <AllCards /> */}
            </Layout>
          )}
        />
        <Route
          path="/cards/:name"
          render={props => (
            <Layout>
              <Card {...props} />
            </Layout>
          )}
        />
        <Route
          path="/cards"
          exact
          render={props => (
            <Layout>
              <AllCards {...props} />
            </Layout>
          )}
        />
        <Route
          render={props => (
            <Layout>
              <NotFound {...props} />
            </Layout>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
