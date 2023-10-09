import React from "react";
import ReactPlayer from "react-player";

const Player = (props) => {
  return (
    <div className="pb-3">
      <ReactPlayer height={200} width={400} url={props.url}></ReactPlayer>
    </div>
  );
};

export default Player;
