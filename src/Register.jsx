import React, { useState, useEffect, useReducer } from "react";

const defaultState = {
  users: [],
  isModalOpen: false,
  modalContent: "",
};

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });
  return (
    <div className="modal">
      <h2>{modalContent}</h2>
    </div>
  );
};

const processUsers = (usersLog, action) => {
  console.log(usersLog);
  // e.preventDefault();
  if (action.type === "REGISTER") {
    // const newUsers = [...usersLog.users, action.payload];
    return {
      // ...usersLog,
      // users: newUsers,
      isModalOpen: true,
      modalContent: "Account Registered!",
    };
  }
  if (action.type === "NO_PASSWORD") {
    return {
      ...usersLog,
      isModalOpen: true,
      modalContent: "Please Enter password",
    };
  }
  if (action.type === "PASSWORD_MIXMATCH") {
    return {
      ...usersLog,
      isModalOpen: true,
      modalContent: "Passwords mixmatch",
    };
  }

  if (action.type === "CONFIRM") {
    return {
      ...usersLog,
      isModalOpen: true,
      modalContent: "Please confirm password",
    };
  }

  if (action.type === "EMAIL") {
    return {
      ...usersLog,
      isModalOpen: true,
      modalContent: "Please provide an email",
    };
  }

  if (action.type === "NO_DETAILS") {
    return {
      ...usersLog,
      isModalOpen: true,
      modalContent: "Please enter your details",
    };
  }

  if (action.type === "CLOSE") {
    return {
      ...usersLog,
      isModalOpen: false,
    };
  } else {
    throw new Error("An error occured");
  }
};

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usersLog, handleUsers] = useReducer(processUsers, defaultState);

  const closeModal = () => {
    handleUsers({ type: "CLOSE" });
  };

  const registerUser = (e) => {
    e.preventDefault();

    if (!username && !password && !email) {
      handleUsers({ type: "NO_DETAILS" });
    } else if (!password) {
      handleUsers({ type: "NO_PASSWORD" });
    } else if (password && !cpassword) {
      handleUsers({ type: "CONFIRM" });
    } else if (password !== cpassword) {
      handleUsers({ type: "PASSWORD_MIXMATCH" });
    } else if (!email) {
      handleUsers({ type: "EMAIL" });
    } else {
      const newUser = {
        id: new Date().getTime().toString(),
        email,
        password,
        username,
      };
      console.log({ username, password, email });
      handleUsers({ type: "REGISTER", payload: newUser });
      setUsername("");
      setPassword("");
      setCPassword("");
      setEmail("");
    }
  };

  //   constructor(props) {
  //     super(props);

  //     this.username = React.createRef();
  //     this.password = React.createRef();
  //     this.cpassword = React.createRef();
  //     this.email = React.createRef();

  //     // this.textInput = null;
  //     // this.username = (element) => {
  //     //   this.textInput = element;
  //     //   console.log(element);
  //     // };

  //     // this.username = React.createRef();
  //     // this.registerUser = this.registerUser.bind(this);
  //     // this.setState = {
  //     //   username: "",
  //     // };
  //   }

  //   registerUser = () => {
  //     const Username = this.username.current.value;
  //     const Password = this.password.current.value;
  //     const confirmPassword = this.cpassword.current.value;
  //     const Email = this.email.current.value;
  //     if (Password === confirmPassword) {
  //       const userDetails = [Username, Password, confirmPassword, Email];
  //       console.log(userDetails);
  //     } else {
  //       document.querySelector("#cpassword").style.border = "1px solid red";
  //       document.querySelector("span.error").textContent = "Password mixmatch!";
  //     }
  //     // const val = refs.username.value;
  //     // console.log(this.myRef.current);
  //   };

  //   render() {
  return (
    <>
      {usersLog.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={usersLog.modalContent} />
      )}
      <h2>Sign Up</h2>
      <form onSubmit={registerUser}>
        <div className="register">
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="register">
          <input
            type="password"
            name="password"
            value={password}
            id=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="fa-solid fa-eye"></i>
        </div>
        <div className="register">
          <input
            type="password"
            name="password"
            id="cpassword"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            placeholder="Confirm password"
          />
          <i className="fa-solid fa-eye"></i>
        </div>
        <span className="error"></span>
        <div className="register">
          <input
            type="email"
            name="e-mail"
            value={email}
            id=""
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <i className="fa-solid fa-envelope"></i>
        </div>

        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;
