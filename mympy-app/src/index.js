// imports below 
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { StripeProvider } from 'react-stripe-elements';
import thunk from 'redux-thunk';
import Logger from 'redux-logger'; // REMOVE FOR PRODUCTION -----------------------------------------------------------^^^^^^^^^^^^^^^^^^^^^\\\\\\\\\\\\\\\\\\\\
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from "./auth/auth_config.json"
import './index.scss';
import rootReducer from './reducers';
import App from './auth/AppSetter';
import { Auth0Provider } from "./react-auth0-wrapper";

// requires below

require("dotenv").config();

// variable below

// composeEnhancer allows for redux store dev view in chrome
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, Logger)));
// let stripe = null;

// // Checks if stripe in public/index.html has loaded or not
// if (window.Stripe) {

//     stripe = 'pk_test_1d72AL8UO1qMdLmncaIcIaEx00n89i0APd';

// } else {

//   document.querySelector('#stripe-js').addEventListener('load', () => {

//     // Create Stripe instance once Stripe.js loads
//     stripe = 'pk_test_1d72AL8UO1qMdLmncaIcIaEx00n89i0APd' ;
//   });

// }

// redirect for auth0
const onRedirectCallback = appState => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};



const AppwithRouter = withRouter(App);

const pkTest = process.env.PK_TEST;
// ^^ PK = Publishable Key ^^ per stripe is allowed to be uploaded i.e 'publish'able key

ReactDOM.render(
    <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
        {/* <StripeProvider apiKey={stripe}> */}
            <Provider store={store}>
                <Router>
                    <AppwithRouter />
                </Router>
            </Provider>
        {/* </StripeProvider> */}
    </Auth0Provider>,
    document.getElementById('root')
);
