import React from "react-daisyui";
import { Footer, Button } from "react-daisyui";

const Foot = () => {
  return (
    <Footer className="footer footer-center p-10 bg-accent rounded">
      <div>
        <div className="font-semibold text-lg">
          <Footer.Title>Company</Footer.Title>
        </div>
        <div className="sm:flex items-stretch space-x-4 mb-4 mt-4">
          <a href="#Home">Home</a>
          <a href="#Explore">Explore</a>
          <a href="#Dashboard">Dashboard</a>
          <a href="#About">About</a>
          <a href="#Login">Contact</a>
          <a href="#Login">Login</a>
          <a href="#Login">Logout</a>
          <a href="#Login">Signup</a>
        </div>

        <div className="font-semibold text-lg">
          <Footer.Title>Social</Footer.Title>
        </div>
        <div className="sm:flex items-stretch space-x-4 mb-5">
        <Button className="btn-sm rounded-full border-none mt-8 bg-secondary text-base-content text-xs">Facebook</Button>
        <Button className="btn-sm rounded-full border-none mt-8 bg-secondary text-base-content text-xs">Instagram</Button>
        <Button className="btn-sm rounded-full border-none mt-8 bg-secondary text-base-content text-xs">Twitter</Button>
        </div>
        <div>
        <p>Copyright © 2022 - Made With Wanderlust</p>
      </div>
      </div>
    </Footer>
  );
};

export default Foot;
