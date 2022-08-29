import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const About = () => {
  return (
    <>
      <main className="container mx-auto about">
        <h1 className="text-center">About page</h1>
        <section className="mx-auto shadow w-4/6 p-5 mt-8">
          <div className="flex justify-between">
            <div className="">
              <div className="avatar">
                <div className="w-24 rounded">
                  <img src="https://placeimg.com/192/192/people" alt="avatar" />
                </div>
              </div>
              <h3 className="my-5">Social Links</h3>
              <div className="social_icons">
                <FacebookRoundedIcon />
                <InstagramIcon />
                <TwitterIcon />
                <YouTubeIcon />
              </div>
            </div>
            <div className="flex w-5/6 justify-between">
              <div>
                <h2 className="text-3xl capitalize">User Name</h2>
                <h3 className="text-2xl capitalize text-secondary">
                  web developer
                </h3>
                <h4 className="text-xl font-bold text-gray-500">Rating 1/5</h4>
              </div>
              <div className="text-end">
                <button className="btn btn-primary w-40">Edit Profile</button>
              </div>
            </div>
          </div>
          <div className="user_data mt-5">
            <h2 className="text-2xl capitalize font-semibold">About</h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <tbody>
                  <tr>
                    <th>User Id</th>
                    <td>123456789</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>Hassan</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>email@email.com</td>
                  </tr>
                  <tr>
                    <th>Profession</th>
                    <td>Dev</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
