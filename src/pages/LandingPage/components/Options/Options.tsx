import React from "react";

const Options: React.FC<{
  svg: React.ReactNode;
  backgroundColor: string;
  description: string;
}> = ({ svg, backgroundColor, description }) => {
  return (
    <div className="options-main">
      <div style={{ backgroundColor }}>{svg}</div>
      <p>{description}</p>
    </div>
  );
};

export default Options;
