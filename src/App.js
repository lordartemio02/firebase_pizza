import React, { useEffect, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import firebase from './firebase/firebase'

import * as actions from './store/actions/actions'

import Layout from './components/UI/Layout/Layout';
import Loader from './components/UI/Loader/Loader';

const About = lazy(() => import('./components/Pages/About/About'))
const Cart = lazy(() => import('./components/Pages/CartPage/CartPage'))
const Checkout = lazy(() => import('./components/Pages/Checkout/Checkout'))
const Disclaimer = lazy(() => import('./components/Pages/Disclaimer/Disclaimer'))
const Error404 = lazy(() => import('./components/Pages/404/Error404'))
const FAQ = lazy(() => import('./components/Pages/FAQ/FAQ'))
const Home = lazy(() => import('./components/Pages/Home/Home'))
const Menu = lazy(() => import('./components/Pages/Menu/Menu'))
const SendEmail = lazy(() => import('./components/Pages/sendEmail/sendEmail'))
const Orders = lazy(() => import('./components/Pages/Orders/Orders'))
const Privacy = lazy(() => import('./components/Pages/Privacy/Privacy'))
const Terms = lazy(() => import('./components/Pages/Terms/Terms'))

function App(props) {


  return (
    <>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/disclaimer" component={Disclaimer} />
            <Route path="/faq" component={FAQ} />
            <Route path="/menu" component={Menu} />
            <Route path="/contact" component={SendEmail} />
            <Route path="/orders" component={Orders} />
            <Route path="/privacy-policy" component={Privacy} />
            <Route path="/terms-and-conditions" component={Terms} />
            <Route component={Error404} />
          </Switch>
        </Layout>
      </Suspense>
    </>
  );
}



export default (App);
