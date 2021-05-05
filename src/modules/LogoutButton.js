import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {a} from 'react-router-dom';

function LogoutButton() {
  const {logout} = useAuth0();
  return(
    <a href = "#logout"
    onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</a>
  )
}

export default LogoutButton;