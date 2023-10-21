import React from "react";
import kevin from "./assets/kevin.jpeg";

const Hero = () => {
  return (
    <div id="home" className="hero min-h-screen bg-base-200 px-8">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={kevin}
          className="max-w-full md:max-w-sm rounded-lg shadow-2xl z-10"
        />
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm Kevin!</h1>
          <p className="py-6">
            Welcome! I'm a student at Stanford University, majoring in Symbolic
            Systems on the Computer Music concentration, where I explore the
            dynamic interplays of technology and sound.
          </p>
          <p className="pb-6">
            I am currently working on sonification of temporal data in Nilam
            Ram's lab.
          </p>
          <a href="#acoustic" className="btn btn-neutral">
            Selected Works
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
