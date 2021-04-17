import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  function saveUser() {
    console.warn(name, email, mobile);
    let data = { name, email, mobile }
    fetch("https://reqres.in/api/users", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(data)
    })
  }


  return (
    <div className="App">
      <h1>Post Api Form</h1>
      <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Type Your Name" /> <br /> <br />
      <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Type Your Email" /> <br /> <br />
      <input type="text" name="mobile" value={mobile} onChange={(e) => { setMobile(e.target.value) }} placeholder="TYpe Your Mobile" /> <br /> <br />
      <button type="button" onClick={saveUser}>Save User</button>
    </div>
  );
}


export default App;
