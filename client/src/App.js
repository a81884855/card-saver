import React from 'react';
import AllCards from './components/AllCards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './layouts/layout';
import Categories from './components/Categories';
import NotFound from './components/NotFound';
import Calculator from './components/Calculator/';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Layout>
              <Categories />
            </Layout>
          )}
        />
        <Route
          path="/category"
          exact
          render={() => (
            <Layout>
              <Categories />
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
          path="/calculator"
          exact
          render={props => (
            <Layout>
              <Calculator {...props} />
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
