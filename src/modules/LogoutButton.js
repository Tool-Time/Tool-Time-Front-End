import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Anchor} from 'react-router-dom';

function LogoutButton() {
  const {logout} = useAuth0();
  return(
    <Anchor onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</Anchor>
  )
}

export default LogoutButton;