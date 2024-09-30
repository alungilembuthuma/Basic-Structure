// auth.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Auth = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(firebaseReducer.actions.login());
  };

  const handleLogout = () => {
    dispatch(firebaseReducer.actions.logout());
  };

  return (
    <div>
      <h1>Authentication</h1>
      {auth.uid ? (
        <p>Welcome, {auth.displayName}!</p>
      ) : (
        <p>You are not logged in.</p>
      )}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Auth;