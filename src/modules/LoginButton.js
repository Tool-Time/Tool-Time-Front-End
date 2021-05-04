import React from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
    const { loginWithPopup } = useAuth0();
    return (
      <Button 
      onClick={() => loginWithPopup()}
      className='float-left'
      >Log In</Button>
    )
}

export default Login;