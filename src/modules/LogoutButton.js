import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from 'react-router-dom';

function LogoutButton() {
  const {logout} = useAuth0();
  return(
    <Link onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</Link>
  )
}

export default LogoutButton;