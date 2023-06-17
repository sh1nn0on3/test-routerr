import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
   
   
    try {
      await axios
        .post("http://103.28.174.29:4180/sign-in", input)
        .then((res) => {
          console.log("🚀 ~ file: Login.jsx:51 ~ .then ~ res:", res.data);
          if (res.data.errorCode === 0) {
            navigate("/home");
          } else {
            alert("Tài khoản sai rồi , nhập lại đi !!!");
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full flex flex-col gap-4 max-w-4xl">
        <input
          className="h-8 p-5 mt-4 w-full border border-gray-400 rounded-2xl outline-none bg-gray-50 "
          placeholder="Email của bạn ..."
          name="email"
          type="text"
          onChange={handleChange}
        />
        <input
          className="h-8 p-5 w-full border border-gray-400 rounded-2xl outline-none bg-gray-50 "
          placeholder="Mật khẩu của bạn ..."
          type="password"
          name="password"
          onChange={handleChange}
        />
        
      </div>
      <div className="w-full flex gap-2 justify-center items-center mt-4 max-w-2xl ">
        <button
          className="w-full border border-yellow-500 bg-yellow-500 text-white font-bold p-4 rounded-full"
          onClick={handleLogin}
          type="submit"
        >
          Đăng nhập
        </button>
        <button
          className="w-full border border-yellow-500 text-yellow-500 font-bold p-4 rounded-full"
          onClick={() => {
            navigate("/");
          }}
        >
          Đăng ký
        </button>
      </div>
    </>
  );
};

export default Login;
