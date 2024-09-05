import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import UserAccount from './UserAccount';
import ErrorPage from './ErrorPage';

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const toggleAuthorization = () => setIsAuthorized(!isAuthorized);

  return (
    <Router>
      <Navbar toggleAuthorization={toggleAuthorization} />
      <Routes>
        <Route path="/" element={<Login  />} />
        <Route
          path="/account"
          element={
            isAuthorized ? <UserAccount /> : <Navigate to="*" />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
