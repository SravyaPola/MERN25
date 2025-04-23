// components/UserDetailsWrapper.js
import React from 'react';
import { useParams } from 'react-router-dom';

export default function UserDetailsWrapper() {
  let params = useParams(); 
  let email = params && params["email"] ? params["email"]: "no email"; 
  let session = params && params["session"] ? params["session"]: "no session";

  return (
    <div>
      <h2>Welcome, User</h2>
      <p>Your Email ID is: {email}</p>
      <p>Your Session is: {session}</p>
    </div>
  );
}
