import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn } = use(AuthContext);
  const Location = useLocation();
  const Navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Navigate(`${Location.state? location.state:'/'}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
      });

    console.log({email,password});
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-[18px] font-bold">Log in</h1>
        <form
          onSubmit={handleLogin}
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm mb-5 mt-10"
        >
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <p className="text-red-500">{error}</p>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>
          </div>
        </form>
        <div className="flex items-center gap-2">
          <p>Don’t you have an account? </p>
          <Link state={Location.pathname} to="/auth/signup">
            <button className="font-bold text-blue-500">Sign up</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
