import logo from './logo.svg';
import './App.css';
import React from 'react';
//import axios from 'axios'
import { Container } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //coming soon
    }
  }

  render(){
    return(
      <>
      <LoginButton />
      <LogoutButton />
      {this.props.auth0.isAuthenticated && 
      <Profile />
      }
      </>
    )
  }
}




export default withAuth0(App);
