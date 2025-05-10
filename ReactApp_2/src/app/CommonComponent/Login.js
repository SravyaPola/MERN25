import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    username: 'spola',
    password: 'spola',
    email: 'spola',
    phone: '12345'
  });


// The below will set just the value of current data passed and when one parameter is passed rest is empty,
// so when each time you click it will just set the current value

//   let handleChange = (e) => {
//     setFormData(()=> ({
//       [e.target.name]: e.target.value
//     }));
//   };

let handleChange = (e) => {
    setFormData((prev)=> ({
       ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div>
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={(e) => setFormData((prev) => ({...prev, phone: e.target.value }))} />
      </div>
     <p>username : {formData.username}</p>
     <p>password : {formData.password}</p>
     <p>email : {formData.email}</p>
     <p>phone : {formData.phone}</p>
    </div>
  );
}

export default Login;
