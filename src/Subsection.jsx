import React from "react";

const Subsection = (props) => {
  return (
    <>
      <hr></hr>
      <div className="py-12 scroll-mt-10" id={props.id}>
        <h1 className="pb-5 text-3xl lg:text-4xl">{props.title}</h1>
        <div className="">{props.children}</div>
      </div>
    </>
  );
};

export default Subsection;
