import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignIn } from "../../store/slices/auth";

function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const { token, loading, error } = useSelector((store) => store.authReducer);

  console.log("Token : ", token);
  console.log("Loading :", loading);
  console.log("Error", error);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      userSignIn({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
  };

  return (
    <>
      {error && <p className="alert alert-danger">{error}</p>}
      <form onSubmit={submitHandler}>
        {/* Email */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            placeholder=""
            ref={emailRef}
          />
          <label htmlFor="email">Email</label>
        </div>
        {/* Password */}
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder=""
            ref={passwordRef}
          />
          <label htmlFor="password">Password</label>
        </div>
        {/* button */}
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Logging in...." : "Login"}
        </button>
      </form>
    </>
  );
}

export default LoginPage;
