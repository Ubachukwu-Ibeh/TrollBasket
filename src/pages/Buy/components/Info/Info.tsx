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
      <div className="info-content">
        {question}
        {action && <button>{action}</button>}
      </div>
      {numberID === 1 && [
        <div key="white-fade1" className="white-fade1"></div>,
        <div key="white-fade2" className="white-fade2"></div>,
        ...Array(10)
          .fill(true)
          .map((item, index) => (
            <div key={index} className={`star${index + 1}`}></div>
          ))
      ]}
    </div>
  );
};

export default Info;
