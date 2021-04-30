import React from "react";
import colors from "../../../../helpers/colors";

const Options: React.FC<{
  svg: React.ReactNode;
  backgroundColor: string;
  description: string;
  type?: string;
  selected?: boolean;
}> = ({ svg, backgroundColor, description, type, selected }) => {
  return (
    <div
      className="options-main"
      style={{
        borderTop: selected ? `1px solid ${colors.blue}` : undefined
      }}>
      <div style={{ backgroundColor }}>{svg}</div>
      <p
        style={{
          marginTop: type === "footer" ? 0 : undefined,
          color: type === "footer" ? colors.footerText : "black"
        }}>
        {description}
      </p>
    </div>
  );
};

export default Options;
