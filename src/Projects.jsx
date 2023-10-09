import React from "react";
import Subsection from "./Subsection";
import Player from "./Player";

const Projects = () => {
  return (
    <section className="bg-base-200 p-4 lg:p-24">
      <Subsection id="acoustic" title="Acoustic Compositions"></Subsection>
      <Subsection
        id="electronic"
        title="Electronic and Algorithmic Compositions"
      >
        <div className="pb-3">
          <h2 className="text-3xl font-extrabold">Sky Burial</h2>
          <h3 className="text-xl font-light text-slate-500">2022</h3>
        </div>
        <Player url="https://soundcloud.com/kevin-liao-775540098/sky-burial?in=kevin-liao-775540098/sets/sky-burial&si=32033cdb508f49678b2338626cdf31aa&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
        <p className="">
          "Sky Burial" refers to a Tibetan Buddhist practice in which a body is
          generously fed to Himalayan vultures. This EP explores sound design
          and sampling, including sounds from traditional media, recorded noise
          from nature, and tuned machine noise.
        </p>
      </Subsection>
      <Subsection id="web" title="Web Applications"></Subsection>
      <Subsection id="physical" title="Physical Interaction Design for Music">
        <div className="pb-3">
          <h2 className="text-3xl font-extrabold">Beandolin</h2>
          <h3 className="text-xl font-light text-slate-500">2023</h3>
        </div>
        <Player url="https://www.youtube.com/watch?v=H8oFNkZPV88&embeds_referring_euri=https%3A%2F%2Fccrma.stanford.edu%2F&source_ve_path=MjM4NTE&feature=emb_title"></Player>
        <p>
          Beandolin is a musical instrument that uses a Teensy microcontroller
          to produce sound. A piezo microphone attached to the bottom of the jar
          picks up a response which is routed through a physical guitar model in
          the Faust programming language. These bean noises are tuned to chord
          tones, depending on the current chord, which the musician selects
          using buttons. Force-sensitive resistors also allow the user to play
          bass notes. This integration of sound design, functional programming,
          and microcontroller programming allows for a fun musical performance.
          The above video demonstrates the instrument used to create a
          bluegrass-style rhythm section.
        </p>
      </Subsection>
    </section>
  );
};

export default Projects;
