import React from "react-daisyui";
import { Footer } from "react-daisyui";

const Foot = () => {
  return (
    <Footer className="footer footer-center p-10 bg-accent rounded">
      <div>
        <div className="font-semibold text-lg">
          <Footer.Title>Company</Footer.Title>
        </div>
        <div className="hidden sm:flex items-stretch space-x-4 mb-4 mt-4">
            <ul>
                <li>Home</li>
                <li>Explore</li>
                <li>Dashboard</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </div>
      </div>
    </Footer>
  );
};

export default Foot;