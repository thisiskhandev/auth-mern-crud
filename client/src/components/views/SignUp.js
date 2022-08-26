import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logos/Logo_Blogely.svg";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setUser((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      alert("Registration failed!");
      console.log("Registration failed!");
    } else {
      alert("Registration Scuccessfull!");
      navigate("/signin");
    }
  };

  return (
    <>
      <main className="login container mx-auto h-screen flex justify-center items-center">
        <section className="text-center max-w-full">
          <form method="POST">
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
                value={user.name}
                onChange={handleInputs}
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mt-5 cursor-pointer bg-slate-100"
                name="email"
                value={user.email}
                onChange={handleInputs}
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="input input-bordered w-full mt-5 cursor-pointer bg-slate-100"
                name="phone"
                value={user.phone}
                onChange={handleInputs}
              />
              <input
                required
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mt-5 cursor-pointer bg-slate-100"
                name="password"
                value={user.password}
                onChange={handleInputs}
              />
              <input
                required
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full mt-5 cursor-pointer bg-slate-100"
                name="cpassword"
                value={user.cpassword}
                onChange={handleInputs}
              />
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="btn btn-primary submit"
                value="register"
                onClick={PostData}
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
