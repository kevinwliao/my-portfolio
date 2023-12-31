import React from "react";
import Subsection from "./Subsection";
import Player from "./Player";
import Card from "./Card";
import bub from "./assets/bub.jpeg";
import shep from "./assets/shep.jpeg";

const CHUCK_LINK = "https://chuck.stanford.edu/";
const NIGHTMARE_LIBRARY_CODE_LINK =
  "https://github.com/kevinwliao/nightmare-library/blob/main/nightmare-library.ck";
const BEANDOLIN_CODE_LINK = "https://github.com/kevinwliao/beandolin";
const WEBCHUCK_LINK = "https://chuck.cs.princeton.edu/webchuck/";
const FAUST_LINK = "https://faust.grame.fr/";
const BUB_LINK = "https://ccrma.stanford.edu/~kliao14/bub/";
const SHEP_LINK = "https://ccrma.stanford.edu/~kliao14/shep/";
const GLASS_PRELUDE_SCORE_LINK =
  "https://musescore.com/user/61065196/scores/12555049";

const RUNNING_LINK =
  "https%3A//api.soundcloud.com/tracks/1637020254%3Fsecret_token%3Ds-UWMleiZdvYz&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
const GLASS_PRELUDE_LINK =
  "https://soundcloud.com/kevin-liao-775540098/glass-etude?si=160f620fade249149439492bb6944e6b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
const NIGHTMARE_LIBRARY_LINK =
  "https://soundcloud.com/kevin-liao-775540098/nightmare-library-1?si=665b13be94214dd1b5a6ec5c1573fc88&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
const SKY_BURIAL_LINK =
  "https://soundcloud.com/kevin-liao-775540098/sky-burial?in=kevin-liao-775540098/sets/sky-burial&si=32033cdb508f49678b2338626cdf31aa&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
const BEANDOLIN_LINK = "https://youtu.be/H8oFNkZPV88";
const BE_STILL_LINK =
  "https://soundcloud.com/kevin-liao-775540098/be-still?si=83af8efce8f24b848be08793a513ac62&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

const Projects = () => {
  return (
    <section className="bg-base-200 px-8 sm:px-24 md:px-48 lg:px-60 xl:px-80">
      <Subsection
        id="electronic"
        title="Electronic and Algorithmic Compositions"
      >
        <div className="mb-6" id="piece">
          <div className="pb-5">
            <h2 className="text-3xl font-extrabold">Nightmare Library</h2>
            <h3 className="text-xl font-light text-slate-500">ChucK, 2023</h3>
          </div>
          <Player url={NIGHTMARE_LIBRARY_LINK} />
          <p className="mb-2">
            "Nightmare Library" is inspired by the work of Paul Lansky, meant to
            evoke the feeling of being overwhelmed by noise in a library. This
            algorithmic composition was created in the{" "}
            <a
              href={CHUCK_LINK}
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              ChucK
            </a>{" "}
            language, with event timing, sample manipulation, automation, and
            tunings in code. Each run of the ChucK file creates a slightly
            different sound due to the randomness built into the algorithm.{" "}
          </p>
          <p>
            {" "}
            If you would like to run the ChucK{" "}
            <a
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href={NIGHTMARE_LIBRARY_CODE_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              code
            </a>{" "}
            yourself, you will hear a unique instantiation of the piece due to
            the randomization involved in the process.
          </p>
        </div>
        <div className="mb-6" id="piece">
          <div className="pb-5">
            <h2 className="text-3xl font-extrabold">Be Still!</h2>
            <h3 className="text-xl font-light text-slate-500">2023</h3>
          </div>
          <Player url={BE_STILL_LINK} />
          <p className="">
            Miami bass, breakbeat, and a little bit of bounce. An eclectic and
            maximalist instrumental.
          </p>
        </div>
      </Subsection>
      <Subsection id="acoustic" title="Acoustic Compositions">
        <div className="mb-6" id="piece">
          <div className="pb-5">
            <h2 className="text-3xl font-extrabold">
              Running, Stomping in My Sleep
            </h2>
            <h3 className="text-xl font-light text-slate-500">
              Saxophone Quartet, CCRMA 2022
            </h3>
          </div>
          <Player url={RUNNING_LINK} />

          <p className="mb-2">
            "Running, Stomping In My Sleep" is a piece for saxophone quartet.
            The tripartite composition explores the whimsy, violence, and calm
            of a dream world, using a blend of polytonality, chromaticism, and
            stream segregation techniques.{" "}
          </p>

          <p>
            {" "}
            <a
              href="https://musescore.com/user/61065196/scores/12553795"
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full score.
            </a>
          </p>
        </div>

        <div className="mb-6" id="piece">
          <div className="pb-5">
            <h2 className="text-3xl font-extrabold">Glass Prelude</h2>
            <h3 className="text-xl font-light text-slate-500">Piano, 2022</h3>
          </div>
          <Player url={GLASS_PRELUDE_LINK} />

          <p className="mb-2">
            "Glass Prelude" is a study concerning the construction of rhythmic
            motifs.
          </p>
          <p>
            {" "}
            <a
              href={GLASS_PRELUDE_SCORE_LINK}
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full score.
            </a>
          </p>
        </div>
      </Subsection>

      <Subsection id="web" title="Web Applications">
        <div className="mb-6" id="piece">
          <div className="flex gap-2 flex-wrap sm:flex-nowrap">
            <Card title="Bubble Bells" src={bub} link={BUB_LINK}>
              Interactive ambient chord player based on a simplified physics.
              Sliders adjust voices, numbers on keypad change chord. Graphics
              created in Javascript. Sound designed in{" "}
              <a
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href={WEBCHUCK_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                WebChucK.
              </a>{" "}
              Open in Chrome for full audio compatibility.
            </Card>
            <Card
              title="Penrose Stairs and Shepard Tone Scale"
              src={shep}
              link={SHEP_LINK}
            >
              Audiovisualization of penrose stairs and shepard tone scale.
              Graphics created in Javascript. Sound designed in{" "}
              <a
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href={WEBCHUCK_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                WebChucK.
              </a>{" "}
              Open in Chrome for full audio compatibility.
            </Card>
          </div>
        </div>
      </Subsection>
      <Subsection id="physical" title="Physical Interaction Design for Music">
        <div className="mb-6" id="piece">
          <div className="pb-5">
            <h2 className="text-3xl font-extrabold">Beandolin</h2>
            <h3 className="text-xl font-light text-slate-500">2023</h3>
          </div>
          <Player url={BEANDOLIN_LINK}></Player>
          <p className="mb-2">
            Beandolin is a musical instrument that uses a Teensy microcontroller
            to produce sound. A piezo microphone attached to the bottom of the
            jar picks up a response which is routed through a physical guitar
            model in the{" "}
            <a
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href={FAUST_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Faust
            </a>{" "}
            programming language. These bean noises are tuned to chord tones,
            depending on the current chord, which the musician selects using
            buttons. Force-sensitive resistors also allow the user to play bass
            notes.{" "}
          </p>
          <p className="mb-2">
            This integration of sound design, functional programming, and
            microcontroller programming allows for a fun musical performance.
            The above video demonstrates the instrument used to create a
            bluegrass-style rhythm section.
          </p>
          <p>
            {" "}
            <a
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href={BEANDOLIN_CODE_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Faust code compiled to C++ and Arduino code.
            </a>{" "}
          </p>
        </div>
      </Subsection>
      <Subsection id="about" title="About Me">
        <p className="mb-2">
          Throughout my life, my passion for music has taken many different
          forms: turning my childhood bedroom into a makeshift disco or writing
          jingles for imaginary brands. Fast forward to high school, and
          freestyle rap sessions with friends turned into collaborative
          GarageBand projects, opening up a new world of electronic composition
          and production.
        </p>
        <p className="mb-2">
          Now in college, I call myself a Scruggs-style banjo player, pianist,
          producer, composer, and writer, who also codes music and sound. These
          labels are all subject to change, and I'm pumped to see where music
          takes me next. I hope you enjoy this snapshot of who I am as a
          creative today.
        </p>
      </Subsection>
    </section>
  );
};

export default Projects;
