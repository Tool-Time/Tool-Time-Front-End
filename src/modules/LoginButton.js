import React from 'react';
import {Anchor} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
    const { loginWithPopup } = useAuth0();
    return (
      <Anchor 
      onClick={() => loginWithPopup()}
      className='float-left'
      >Log In</Anchor>
    )
}

export default Login;