import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutStart, logoutSuccess } from "../../redux/authSlice";

const host = process.env.REACT_APP_API_URL;

const Logout = () => {
  const navigation = useNavigate();
  const dispath = useDispatch();

  let token = localStorage.getItem("accessToken");
  let id = "123";
  let logout = async () => {
    let data = await axios.post(`${host}/auth/logout`, id, {
      headers: {
        token: `token ${token}`,
      },
    });
  };
  useEffect(() => {
    dispath(logoutStart());
    logout();
    localStorage.removeItem("accessToken");
    dispath(logoutSuccess());
    navigation("/");
  }, []);
  return <>Logout</>;
};

export default Logout;
