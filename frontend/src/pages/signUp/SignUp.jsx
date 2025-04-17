import React, { useState } from "react";
import useSignUp from "../../hooks/useSignUp";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  const { signup, loading } = useSignUp();
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        {/*  backdrop-filter backdrop-blur-lg bg-opacity-0 taking testing them in tailwind css glassmorphism  */}
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Enter FullName"
            />
          </div>

          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">username</span>
            </label>
            <input
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Enter password"
            />
          </div>

          <div className="mb-4">
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="underline inline-block hover:text-blue-600 mt-2 text-sm "
          >
            Already have an account
          </Link>
          <div>
            <button
              disabled={loading}
              type="submit"
              className="btn btn-block btn-sm mt-2"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
