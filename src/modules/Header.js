import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import {withAuth0} from '@auth0/auth0-react';
import Login from './LoginButton';
import Logout from './LogoutButton';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Tool Time</Navbar.Brand>
        <Link to="/" className="mr-2">home</Link>
        {this.props.auth0.isAuthenticated ?
          <Logout/>
          :
          <Login/>
        }
        
      </Navbar>
    )
  }
}

export default withAuth0(Header);