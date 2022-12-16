import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { BeatLoader } from "react-spinners";

import { loginSuccess, loginStart, loginFaild } from "../../redux/authSlice";
import "./Login.scss";

const host = process.env.REACT_APP_API_URL;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const loading = useSelector((state) => state.auth.login.loading);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    const newUSer = {
      username: username,
      password: password,
    };
    try {
      const res = await axios.post(`${host}/auth/login`, newUSer);
      if (res.data.error !== 0) {
        setErr(res.data.message);
        dispatch(loginFaild());
        return;
      }
      dispatch(loginSuccess(res.data));
      localStorage.setItem("accessToken", res.data.accessToken);
      if (res.data.payload.role === "admin") {
        navigate("/admin");
        return;
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <div className="row gx-5 gy-3 form-login">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group col">
              <label htmlFor="exampleInputEmail1">User name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter user name"
                value={username}
                onChange={(e) => handleUsername(e)}
              />
            </div>
            <div className="form-group col">
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
            {err ? (
              <div className="col ">
                <span className="err-code">*{err}</span>
              </div>
            ) : (
              <></>
            )}
            <button type="submit" className="button">
              {loading ? <BeatLoader color="#36d7b7" size={10} /> : <>Login</>}
            </button>
          </form>
          <NavLink to={"/register"}>Don't have account? Register</NavLink>
        </div>
      </section>
    </>
  );
};

export default Login;
