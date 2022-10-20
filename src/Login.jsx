import React, { useEffect, useReducer, useState } from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
// import Dashboard from "./Dashboard";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState("");
  // const [modal, showModal] = useState(true);

  const Modal = ({ modalContent }) => {
    useEffect(() => {
      setTimeout(() => {
        closeDispatch();
      }, 2000);
    });
    return (
      <div className="modal">
        <h2>{modalContent}</h2>
      </div>
    );
  };

  const loginUser = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log({ username, password });
    if (username && password) {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 60,
          // optional
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.message) {
            const errorData = data.message;
            console.log(data.message);
            dispatch({ type: "ERROR", payload: errorData });
          } else {
            setLogin(true);
            console.log(data.id);
            setUserId(data.id);
          }
        });
    }
    // username: ""
    //  password: "";
    // setLogin(true);
  };

  const reducer = (state, action) => {
    if (action.type === "ERROR") {
      console.log(action.payload);
      return {
        modal: true,
        modalContent: action.payload,
      };
    }

    if (action.type === "CLOSE") {
      return {
        modal: false,
      };
    }
  };

  const initialState = {
    username: "",
    password: "",
    modal: false,
  };

  const closeDispatch = () => {
    dispatch({ type: "CLOSE" });
  };

  // useEffect(() => {

  // });

  // if (login) {
  //   return <Dashboard />;
  // }
  const [state, dispatch] = useReducer(reducer, initialState);
  if (login) {
    return (
      <>
        {/* <Router> */}
        <Navigate replace to={`/dashboard/${userId}`} />
        {/* <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes> */}

        {/* // </Router> */}
      </>
    );
  }
  return (
    <>
      <h2>Log in</h2>
      {state.modal && (
        <Modal
          closeDispatch={closeDispatch}
          modalContent={state.modalContent}
        />
      )}
      <form onSubmit={loginUser}>
        <div className="login">
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="login">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id=""
            placeholder="Password"
          />
          <i className="fa-solid fa-eye"></i>
        </div>

        <br />
        <button type="submit">Log in</button>
      </form>
    </>
  );
}
