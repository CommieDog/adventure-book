import React from "react";
import { Hero, Button } from "react-daisyui";

const Home = () => {
  return (
    <div>
      <Hero className="min-h-screen bg-base-100">
        {/* <Hero.Overlay className="min-h-screen bg-base-100" /> */}
        <Hero.Content className="text-center">
          <div className="max-w-md text-secondary-content">
            <h1 className="mt-5 text-6xl">Adventure Book</h1>
            <h2 className="mt-5 text-4xl">
              Get Inspired<br></br>
              Plan Your Next Adventure
            </h2>
            <Button className="btn rounded-full border-none mt-8 bg-secondary text-base-content">
              Explore
            </Button>
          </div>
        </Hero.Content>
      </Hero>

      <Hero>
        <Hero.Overlay className="" />
        <Hero.Content className="text-center my-7">
          <div className="">
            <h2 className="py-6 text-2xl font-medium">
              Get Recommendations From Real People <br></br>
              Who Have Experienced The Places You Want to Go, And The Activities You Want To Do. <br></br>
              Discover Hidden Gems, Live Like
              The Locals Do. <br></br>
              Google and Travel Advisor Don’t Always Know It All.
            </h2>
            <Button className="btn rounded-full border-none mt-4 bg-secondary text-base-content">
              Explore
            </Button>
          </div>
        </Hero.Content>
      </Hero>
    </div>
  );
};

export default Home;
