import React from 'react';
import AllCards from './components/AllCards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './layouts/layout';
import Categories from './components/Category';
import NotFound from './components/NotFound';
import Calculator from './components/Calculator/';
import Home from './components/Home';
import CardPicker from './components/CardPicker/';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/rank" exact render={() => <Categories />} />
          <Route path="/cards" exact render={props => <AllCards {...props} />} />
          <Route path="/calculator" exact render={props => <Calculator {...props} />} />
          <Route path="/card-picker" exact render={props => <CardPicker {...props} />} />
          <Route render={props => <NotFound {...props} />} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
