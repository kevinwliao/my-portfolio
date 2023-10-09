import React from "react";
import kevin from "./assets/kevin.jpeg";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 px-24">
      <div className="hero-content flex-col lg:flex-row">
        <img src={kevin} className="max-w-sm rounded-lg shadow-2xl z-10" />
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm Kevin!</h1>
          <p className="py-6">
            I'm a student at Stanford University, majoring in Symbolic Systems
            on the Computer Music track, where I explore the dynamic interplays
            of technology and sound.
          </p>
          <a href="#projects" className="btn btn-neutral">
            My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
