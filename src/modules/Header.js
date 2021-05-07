import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import {withAuth0} from '@auth0/auth0-react';
import Login from './LoginButton';
import Logout from './LogoutButton';
import SearchForm  from './SearchForm';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>Tool Time</Navbar.Brand>

        <Nav className="mr-auto">
          <Link to="/" className="mr-2">home</Link>
          {this.props.auth0.isAuthenticated ?
            <Logout/>
            :
            <Login/>
          }
        </Nav>
       
        <SearchForm 
        handleChange={this.props.handleChange}
        category={this.props.category}/>
      </Navbar>
    )
  }
}

export default withAuth0(Header);