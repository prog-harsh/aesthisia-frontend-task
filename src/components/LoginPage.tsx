import React, { FormEvent, useState } from "react";
import hero from "../assets/hero.png";
import petals from "../assets/petals.png";
import logo from "../assets/logo.png";
import Vector from "../assets/Vector.svg";
import { emailRegex, passwordRegex } from "../utils";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [logged, setLogged] = useState(false);

  const toggleShowPassword = () => {
    setShow(!show);
  };

  const validateEmail = () => emailRegex.test(email);

  const validatePassword = () => passwordRegex.test(password);
  console.log(email);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();

    if (!isValidEmail && !isValidPassword) {
      setError("Invalid Email and Password!");
      setLogged(false);
    } else if (!isValidEmail) {
      setError("Invalid Email!");
      setLogged(false);
    } else if (!isValidPassword) {
      setError("Invalid Password!");
      setLogged(false);
    }
    else{
      setError("You are logged in successfully!")
      setLogged(true);
    }
  };

  return (
    <div className="h-screen flex  items-center">
      <div className="hidden sm:block pl-4 relative overflow-hidden bg-cover bg-no-repeat">
        <img src={hero} alt="hero" className="w-[620px] h-[555px]" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full py-8 px-8 overflow-hidden bg-fixed">
          <img src={logo} alt="logo" />
          <div className="flex h-full flex-col justify-between">
            <div className="mt-56">
              <p className="text-white opacity-100 text-4xl font-medium">
                100% Uptime😎
              </p>
              <p className="text-white opacity-60 text-3xl ">
                Zero Infrastructure
              </p>
              <p className="text-white opacity-60 text-3xl ">Management</p>
            </div>
            <div className="flex justify-between">
              <a
                href="https://aesthisia.com/"
                target="_blank"
                className="text-white mb-2 text-sm opacity-70"
              >
                aesthesia.com
              </a>
              <div className="space-x-3">
                <i className="fa-brands fa-linkedin-in cursor-pointer text-white text-sm"></i>
                <i className="fa-brands fa-facebook-f cursor-pointer text-white text-sm"></i>
                <i className="fa-brands fa-instagram cursor-pointer text-white text-sm"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-grow justify-center flex-col items-center">
        <img src={petals} alt="petals" className="w-16 h-12" />
        <h1 className="text-4xl font-medium mb-1">
          Welcome <span className="text-offcyan">Back!</span>
        </h1>
        <p className="text-lightGrey mb-6">Glad to see you, Again!</p>

        <form onSubmit={handleLogin} className="max-sm:w-4/5 w-[360px]">
          <div className="border-2 flex mb-5 w-full px-3 py-3 rounded-lg border-lightGrey border-opacity-50  hover:border-opacity-95">
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="outline-none bg-transparent h-full flex-grow"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="border-2 flex w-full px-3 py-3 rounded-lg border-lightGrey border-opacity-50  hover:border-opacity-95">
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="outline-none bg-transparent h-full flex-grow"
              placeholder="Enter your password"
              required
            />
            <img src={Vector} alt="show" onClick={toggleShowPassword} />
          </div>
          <p className={logged? "text-sm text-green-800" : "text-sm text-red-800"}>{error}</p>
          <p className="text-lightGrey mt-1 text-right text-sm">
            Forgot Password?
          </p>
          <button
            type="submit"
            className="bg-offblack mt-12 shadow-2xl text-white w-full text-xl font-medium py-2 rounded-lg"
          >
            Login
          </button>
          <p className="text-center mt-14 text-sm">
            Don't have an account yet?{" "}
            <span className="text-offcyan cursor-pointer">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
