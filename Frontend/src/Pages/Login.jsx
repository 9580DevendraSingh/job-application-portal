import './Login.css';
import React, { useState } from 'react';

import axios from "axios";
import { useEffect } from 'react';

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [phone, setPhone] = useState("");
  //
 const [data, setData] = useState([]);

  async function submithandler(e) {
    e.preventDefault();

  const applicationData = {  
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    password_hash: password,
    confirm_password: confirmPassword,
    state,
    district
};

  

    try {
      const response = await axios.post('http://localhost:8000/api/create', applicationData); //yaha pr hum backend me jo bhi likha hai jaise ki find / create same vahi likhege.
      alert("✅ Application Submitted Successfully!");
      console.log(response.data);
      //
      details(); 
    } catch (error) {
      console.error("❌ Error submitting form:", error.response?.data || error.message);
      alert("❌ Failed to submit application");
    }
  }

  //
const details = async () => {
  try {
    const result = await axios.get('http://localhost:8000/api/find'); //yaha pr hum backend me jo bhi likha hai jaise ki find / create same vahi likhege.
    console.log("Fetched Data:", result.data);
    //
    setData(result.data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};


 useEffect(() => {
  details();
}, []);


  return (
    <div className="job-form-container">
      <h2>Job Application Form</h2>
      <form className="job-form" onSubmit={submithandler}>
        <div className="form-group">
          <div className="form-field">
            <label>First Name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required placeholder="Enter your first name" />
          </div>
          <div className="form-field">
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required placeholder="Enter your last name" />
          </div>
        </div>

        <div className="form-group">
          <div className="form-field">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" />
          </div>
          <div className="form-field">
            <label>Phone</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="Enter your phone number" />
          </div>
        </div>

        <div className="form-group">
          <div className="form-field">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter password" />
          </div>
          <div className="form-field">
            <label>Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Confirm password" />
          </div>
        </div>

        <div className="form-group">
          <div className="form-field">
            <label>State</label>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} required placeholder="Enter your state" />
          </div>
          <div className="form-field">
            <label>District</label>
            <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} required placeholder="Enter your district" />
          </div>
        </div>

        <button type="submit">Submit Application</button>
      </form>

       {/* DATA TABLE DISPLAYED HERE */}
      <h3 style={{ marginTop: "3rem" }}>Submitted Applications</h3>
      <div style={{ overflowX: "auto" }}>
        <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#eee" }}>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>State</th>
              <th>District</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
                data.map((user) => (

                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.state}</td>
                  <td>{user.district}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Login;
