import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";

const host = process.env.REACT_APP_AUTH_API;
export const loginUSer = async (user, dispatch, navigate) => {
  dispatch(loginStart);
  let newuser = {
    username: "lxchien",
    password: "123456",
  };

  try {
    // const res = await axios.get("http://localhost:8080/");
    const res = await axios.post(`${host}/login`, user);
    if (res.data.error !== 0) {
      console.log(res.data.massage);
      return;
    }
    console.log(res.data);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    dispatch(loginFailed);
  }
};
