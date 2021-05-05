import React from 'react';
import {a} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
    const { loginWithPopup } = useAuth0();
    return (
      <a href = "#login"
      onClick={() => loginWithPopup()}
      className='float-left'
      >Log In</a>
    )
}

export default Login;