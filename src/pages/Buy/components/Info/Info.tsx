import React, { useEffect, useRef } from "react";

const Info: React.FC<{
  question?: React.ReactNode;
  action?: string;
  backgroundColor?: string;
  numberID?: number;
}> = ({ question, action, backgroundColor, numberID }) => {
  const middleInfo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (middleInfo && middleInfo.current) {
      middleInfo.current.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center"
      });
    }
  }, []);

  return (
    <div
      ref={numberID === 1 ? middleInfo : undefined}
      className="info-main"
      style={{ backgroundColor }}>
      {question}
      {action && <button>{action}</button>}
    </div>
  );
};

export default Info;
