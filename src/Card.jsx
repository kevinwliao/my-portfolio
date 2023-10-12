import React from "react";

const Card = (props) => {
  return (
    <div className="card grow w-48 glass shadow-xl">
      <figure className="px-10 pt-10">
        <img className="rounded-xl" src={props.src} alt={props.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.children}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Open</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
