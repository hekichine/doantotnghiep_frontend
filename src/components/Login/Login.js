import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUSer } from "../../redux/apiRequest";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUSer = {
      username: username,
      password: password,
    };
    loginUSer(newUSer, dispatch, navigate);
  };
  return (
    <>
      <section className="container">
        <div className="row gx-5 gy-3 ">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group ">
              <label htmlFor="exampleInputEmail1">User name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter user name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <NavLink to={"/register"}>Don't have account? Register</NavLink>
        </div>
      </section>
    </>
  );
};

export default Login;
