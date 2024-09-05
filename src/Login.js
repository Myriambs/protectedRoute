import React from 'react';
import {useNavigate} from 'react-router-dom'
const Login = ({ setIsAuthorized }) => {
    const navigate= useNavigate()
  // Mock login function
  const handleLogin = () => {
    setIsAuthorized(true);
    navigate('/account')
 };

  return (
    <div>
      <h1>Login Page</h1>
      ya wlecoem lil page mte3 dkhoul 
      {/* <button onClick={handleLogin}>Login</button> */}
    </div>
  );
};

export default Login;
