import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Products from '../pages/Products';
import InfoCart from '../pages/InfoCart';
import Checkout from '../pages/Checkout';

const Routes:React.FC = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/products" />
    </Route>
    <Route component={Products} path="/products" />
    <Route component={InfoCart} path="/infoCart" />
    <Route component={Checkout} path="/checkout" />
  </Switch>
);

export default Routes;
