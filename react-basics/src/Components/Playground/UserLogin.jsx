import { useRef, useState } from "react";
import classes from "./UserLogin.module.css";

function UserLogin() {
  const emailInputRef = useRef();
  //   const [enteredUsername, setEnteredUsername] = useState("");
  //     const [usernameIsBlurred, setUsernameIsBlurred] = useState(false);

  const [username, setUsername] = useState({
    value: "",
    isBlurred: false,
  });

  let usernameIsInvalid = username.isBlurred && username.value.trim() === "";

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Email : ", emailInputRef.current.value);
    console.log("Username : ", username.value);
  };

  const usernameInputHandler = (identifier, val) => {
    setUsername((prevState) => {
      return {
        ...prevState,
        [identifier]: val,
      };
    });
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      <form onSubmit={submitHandler}>
        {/* Controlled - Username */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className={`form-control ${
              usernameIsInvalid ? classes["invalid"] : ""
            }`}
            name="username"
            id="username"
            placeholder=""
            value={username.value}
            onChange={(event) =>
              usernameInputHandler("value", event.target.value)
            }
            onBlur={() => usernameInputHandler("isBlurred", true)}
          />
          <label htmlFor="username">User name:</label>
        </div>

        {usernameIsInvalid && (
          <p className="alert alert-danger">Username is invalid</p>
        )}

        {/* Uncontrolled - Email*/}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder=""
            ref={emailInputRef}
          />
          <label htmlFor="email">Email</label>
        </div>

        <p>Email : {emailInputRef.current && emailInputRef.current.value}</p>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={usernameIsInvalid}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default UserLogin;

// let userA = {
//   email: "a@test",
//   company: "Synechron",
// };

// let userB = {
//     ...userA,
//     email : "b@test"
// }

// console.log(userB);     // { email : "b2test", company : "Synechron" }
