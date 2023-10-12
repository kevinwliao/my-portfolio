import React from "react";
import ReactPlayer from "react-player";

const Player = (props) => {
  return (
    <div className="pb-3">
      <ReactPlayer
        height={200}
        width="100%"
        url={props.url}
        config={{
          soundcloud: {
            options: { color: "" },
          },
        }}
      ></ReactPlayer>
    </div>
  );
};

export default Player;
