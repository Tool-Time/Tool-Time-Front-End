/* eslint-disable react/prop-types */

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

function Header({ filterUsersByTool }) {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className="bar">
      <Navbar.Brand>Tool Time</Navbar.Brand>

      <Nav className="mr-auto">
        <Link to="/" className="mr-2">home</Link>
      </Nav>

      <SearchForm
        filterUsersByTool={filterUsersByTool}
      />
    </Navbar>
  );
}

export default Header;
