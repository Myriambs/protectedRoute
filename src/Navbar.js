import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleAuthorization }) => {
  return (
    <nav>
      <Link to="/">Login</Link>
      <br/>
      <Link to="/account">User Account</Link> <br/> <br/>

      <button onClick={()=>toggleAuthorization()}>Toggle Authorization</button>
    </nav>
  );
};

export default Navbar;
