import React, { Component } from 'react';
import './App.css';
import  { Route, Switch } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


const asyncCheckout = asyncComponent( () => {
  return import('./containers/Checkout/Checkout')
});

const asyncOrders = asyncComponent( () => {
  return import('./containers/Orders/Orders')
});

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={asyncCheckout} />
            <Route path="/orders" component={asyncOrders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
