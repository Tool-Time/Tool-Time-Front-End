import logo from './logo.svg';
import './App.css';
import React from 'react';
//import axios from 'axios'
import { Container } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './modules/LoginButton';
import Header from './modules/Header';
//import Footer from './modules/Footer';
import LogoutButton from './modules/LogoutButton';
import Profile from './modules/Profile';
import MapMaker from './modules/Map.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //coming soon
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {this.props.auth0.isAuthenticated &&
          <Profile />
        }
        <MapMaker />
        {/* <Footer /> */}
      </>
    )
  }
}




export default withAuth0(App);
