import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
      <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
        <h1 className="font-bold text-center block text-2xl">
          Inicio de sesion
        </h1>

        <label className="text-gray-500 block mt-3">
          Correo Electrónico
          <input
            autoFocus={true}
            type={"email"}
            id={"email"}
            name={"email"}
            placeholder={"me@example.com"}
            className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
          />
        </label>
        <label className="text-gray-500 block mt-3">
          Password
          <input
            autoFocus={"password"}
            type={"password"}
            id={"password"}
            name={"password"}
            placeholder={"••••••••••"}
            className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
          />
        </label>
        <button
          onClick={handleLogin}
          className="mt-6 transition  block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg"
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
