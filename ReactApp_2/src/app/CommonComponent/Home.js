import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const goToSession = () => {
    navigate('/user/pola@gmail.com/my_mern_session');
  };

  return (
    <div>
      <NavLink to="/user/sp@gmail.com">Go to User Page</NavLink>
      <br/>
      <p></p>
      <button onClick={goToSession}>View Session Details</button>
    </div>
  );
}
