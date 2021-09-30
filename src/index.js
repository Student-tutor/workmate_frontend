import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./history";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const audience = process.env.REACT_APP_AUTH0_AUDIENCE
const issuer = process.env.REACT_APP_AUTH0_ISSUER 
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
const scope = process.env.REACT_APP_SCOPE

ReactDOM.render(
  <Auth0Provider 
    domain = {domain}
    audience= {audience}
    issuer = {issuer}
    clientId = {clientId}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    scope =  {scope}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();