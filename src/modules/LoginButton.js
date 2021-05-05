import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
    const { loginWithPopup } = useAuth0();
    return (
      <Link 
      onClick={() => loginWithPopup()}
      className='float-left'
      >Log In</Link>
    )
}

export default Login;