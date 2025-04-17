import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        {/*  backdrop-filter backdrop-blur-lg bg-opacity-0 taking testing them in tailwind css glassmorphism  */}
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">username</span>
            </label>
            <input
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">password</span>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Enter password"
            />
          </div>

          <Link
            to="/signup"
            className="underline inline-block hover:text-blue-600 mt-2 text-sm "
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button
              disabled={loading}
              type="submit"
              className="btn btn-block btn-sm mt-2"
            >
              {loading ? (
                <spn className="loading loading-spinner"></spn>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
