import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";

const host = process.env.REACT_APP_API_URL;
export const loginUSer = async (user, dispatch, navigate) => {
  dispatch(loginStart);
  let newuser = {
    username: "lxchien",
    password: "123456",
  };

  try {
    // const res = await axios.get(host);
    console.log(1);
    const res = await axios.post(
      `https://doantotnghiep-backend.vercel.app/api/auth/login`,
      user
    );
    console.log(res.json());
    if (res.data.error !== 0) {
      console.log(res.data.massage);
      return;
    }
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    dispatch(loginFailed);
  }
};
