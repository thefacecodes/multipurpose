import React from "react";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function Community() {
  const [form, setForm] = useState(<Login />);
  return (
    <div className="community">
      <h1>Become a part of our amazing community</h1>
      <div className="form-switch">
        <button onClick={() => setForm(() => <Login setForm={setForm} />)}>
          Log in
        </button>
        <button
          className="signup-btn"
          onClick={() => setForm(() => <Register />)}
        >
          Sign Up
        </button>
      </div>

      {form}
    </div>
  );
}

// YmVkYmIzNTktOGFjNC00MWJmLTg3MDYtYmJkMDIxZWFhNGZi

export default Community;
