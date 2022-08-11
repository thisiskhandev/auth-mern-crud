import React, { useState } from "react";
import Logo from "../images/logos/Logo_Blogely.svg";

const SignIn = () => {
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInpval((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  return (
    <>
      <main className="login container mx-auto h-screen flex justify-center items-center">
        <section className="text-center max-w-full">
          <form action="">
            <div>
              <img src={Logo} alt="Test" width="250" className="m-auto" />
              <h1 className="text-xl my-12">SignIn</h1>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mt-5 cursor-pointer bg-slate-100"
                name="email"
                value={inpval.email}
                onChange={setData}
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mt-5 cursor-pointer bg-slate-100"
                name="password"
                value={inpval.password}
                onChange={setData}
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
                <a
                  href="/"
                  className="text-sm font-semibold text-secondary hover:text-accent underline hover:no-underline"
                >
                  Forgotten Password
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-secondary  submit"
                onClick={(e) => e.preventDefaul()}
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-5 flex justify-center">
            <h6 className="text-sm mr-2">Don't have an account yet?</h6>
            <a
              href="/"
              className="text-sm font-semibold text-secondary hover:text-accent underline hover:no-underline"
            >
              Sign up!
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignIn;
