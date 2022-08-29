import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logos/Logo_Blogely.svg";
import { ToastContainer, toast } from "react-toastify";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      toast.error("Invalid credentials!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } else {
      toast.success("Login is successful!", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      alert("Login sucess!")
      navigate("/about");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main className="login container mx-auto h-screen flex justify-center items-center">
        <section className="text-center max-w-full">
          <form method="POST">
            <div>
              <img src={Logo} alt="Test" width="250" className="m-auto" />
              <h1 className="text-xl my-12">SignIn</h1>
            </div>
            <div className="max-w-xs">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mt-5 cursor-pointer bg-slate-100"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mt-5 cursor-pointer bg-slate-100"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between my-8">
              <div>
                <label className="cursor-pointer flex items-center text-sm font-normal">
                  <input type="checkbox" className="toggle" />
                  &nbsp;Remember Me
                </label>
              </div>
              <div>
                <NavLink
                  to="/"
                  className="text-sm font-semibold text-secondary hover:text-accent underline hover:no-underline"
                >
                  Forgotten Password
                </NavLink>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-secondary  submit"
                onClick={LoginUser}
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-5 flex justify-center">
            <h6 className="text-sm mr-2">Don't have an account yet?</h6>
            <NavLink
              to="/signup"
              className="text-sm font-semibold text-secondary hover:text-accent underline hover:no-underline"
            >
              Sign up!
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignIn;
