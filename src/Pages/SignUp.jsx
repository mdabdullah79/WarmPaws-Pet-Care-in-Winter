import React from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";
import { useLocation } from "react-router";

const SignUp = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const Location = useLocation();
  const Navigate = useNavigate();
  const hadleSignup = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({...user,displayName: name, photoURL: photo});
             Navigate(`${Location.state? location.state:'/'}`);
          })
          .catch((error) => {
            console.log(error);
            setUser(user)
          });
      })
      .catch((error) => {
        const erroMessage = error.message;
      });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-[18px] font-bold">Create an account</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm mb-5 mt-10">
          <form onSubmit={hadleSignup} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              <label className="label">Photo Url</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo Url"
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <button type="submit" className="btn btn-neutral mt-4">
                Sign Up
              </button>
            </fieldset>
          </form>
        </div>
        <div className="flex items-center gap-2">
          <p>Already have an account?</p>
          <Link to="/auth/login">
            <button className="font-bold text-blue-500">Log in</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
