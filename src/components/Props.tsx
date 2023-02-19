import React from "react";

type PropsType = {
  title: string;
};

const Props = (props: PropsType) => {
  return (
    <div>
      <h1>Learn {props.title} Type</h1>
    </div>
  );
};

export default Props;
