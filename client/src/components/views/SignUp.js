import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logos/Logo_Blogely.svg";

const SignUp = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
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
              <h1 className="text-xl my-12">SignUp</h1>
            </div>
            <div className="max-w-xs">
            <input
                required
                type="text"
                placeholder="User Name"
                className="input input-bordered w-full mt-5 cursor-pointer bg-slate-100"
                name="name"
                value={inpval.name}
                onChange={setData}
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mt-5 cursor-pointer bg-slate-100"
                name="email"
                value={inpval.email}
                onChange={setData}
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="input input-bordered w-full mt-5 cursor-pointer bg-slate-100"
                name="phone"
                value={inpval.phone}
                onChange={setData}
              />
              <input
                required
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mt-5 cursor-pointer bg-slate-100"
                name="password"
                value={inpval.password}
                onChange={setData}
              />
              <input
                required
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full mt-5 cursor-pointer bg-slate-100"
                name="cpassword"
                value={inpval.cpassword}
                onChange={setData}
              />
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="btn btn-primary submit"
                onClick={(e) => e.preventDefault()}
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-5 flex justify-center">
            <h6 className="text-sm mr-2">Already have an account?</h6>
            <NavLink
              to="/signin"
              className="text-sm font-semibold text-secondary hover:text-accent underline hover:no-underline"
            >
              Sign In!
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignUp;
