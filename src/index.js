import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Auth0Provider
    domain = 'dion.us.auth0.com'
    clientId ='XPhvFe4CaurS6dWPgcFSNdeoDBHrND40'
    redirectUri = 'http://localhost:3000'
  >
    <React.StrictMode>
     <App />
    </React.StrictMode>
  </Auth0Provider>,

  document.getElementById('root')
);
