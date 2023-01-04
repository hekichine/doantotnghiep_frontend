import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import axios from "axios";

import {
  registerSuccess,
  registerStart,
  registerFaild,
} from "../../redux/authSlice";

const host = process.env.REACT_APP_API_URL;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const loading = useSelector((state) => state.auth.register.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      return;
    }
    dispatch(registerStart());
    const newUSer = {
      username: username,
      password: password,
      email: email,
    };
    try {
      const res = await axios.post(`${host}/auth/register`, newUSer);
      if (res.data.error !== 0) {
        setErr(res.data.message);
        dispatch(registerFaild());
        return;
      }
      dispatch(registerSuccess(res.data));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <div className="row gx-5 gy-3">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
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
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            {err ? (
              <div className="col ">
                <span className="err-code">*{err}</span>
              </div>
            ) : (
              <></>
            )}
            <button type="submit" className="btn btn-primary">
              {loading ? (
                <BeatLoader color="#36d7b7" size={10} />
              ) : (
                <>Register</>
              )}
            </button>
          </form>
        </div>
        <NavLink to={"/login"}>Have a account? Login </NavLink>
      </section>
    </>
  );
};

export default Register;
