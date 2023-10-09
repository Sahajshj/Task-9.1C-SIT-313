import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signout() {
  const navigate = useNavigate();

  // Handle signout logic here
  function handleSignout() {
    // Implement signout logic (e.g., clearing authentication state or tokens)
    // ...

    // Navigate to the home page after signout
    navigate('/');
  }

  return (
    <div className="header">
      <h2>Signout</h2>
      <button className="button1" onClick={handleSignout}>
        Signout
      </button>
    </div>
  );
}

export default Signout;
