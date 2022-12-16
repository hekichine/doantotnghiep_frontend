import axios from "axios";
import { loginSuccess, loginError } from "./authSlice";

const host = process.env.REACT_APP_API_URL;

export const loginUSer = async (user, dispatch, navigate) => {
  try {
    // const res = await axios.get(host);
    const res = await axios.post(`${host}/auth/login`, user);
    console.log(res);
    if (res.data.error !== 0) {
      dispatch(loginError(res.data));
      return;
    }
    dispatch(loginSuccess(res.data));
    if (res.data.payload.role == "admin") {
      navigate("/admin");
      return;
    }
    navigate("/");
  } catch (error) {
    dispatch(loginError(error));
  }
};
