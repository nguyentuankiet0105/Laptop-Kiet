import { Route, Switch, Redirect  } from 'react-router-dom';
import * as React from 'react';
import Login from './Auth/Login';
import Cart from './cart';
import BodyDetails from '../common/BodyDetails/index';
import ProductDetails from '../common/ProductDetails/index';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Catalog from '../common/Catalog/index';
import Landing from '../layout/Auth/Landing';
import Admin from '../common/Admin/admin';
import { Routing } from '../../constants/Routing_common';
import NotFound from "../layout/NotFound"

const Body = () => {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/not-found" exact component={NotFound} />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path={`${Routing.PRODUCTDETAIL}:id`}>
          <ProductDetails />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/aboutUs">
          <AboutUs />
        </Route>
        <Route exact path="/catalog">
          <Catalog />
        </Route>
        <Route exact path="/home">
          <BodyDetails />
        </Route>
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
};
export default Body;
