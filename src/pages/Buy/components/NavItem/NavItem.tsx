import React, { useState } from "react";
import { locations } from "../../../../api/products";
import DropDownArrow from "../../../../assets/svg/DropDownArrow";

const NavItem: React.FC<{
  text: string;
  svg: React.ReactNode;
  type?: string;
}> = ({ text, svg, type }) => {
  const [dropVisible, setDropVisible] = useState(false);
  return (
    <div
      className="nav-item-main"
      onClick={() => type === "drop-down" && setDropVisible(prev => !prev)}>
      {type === "drop-down" && (
        <div className="location-dropdown-container" id="d-d">
          {dropVisible && (
            <div className="location-dropdown">
              {locations.map(locale => (
                <p key={locale}>{locale}</p>
              ))}
            </div>
          )}
        </div>
      )}

      <div
        className="svg-container"
        style={type === "drop-down" ? { marginLeft: "0px" } : undefined}>
        {svg}
      </div>

      <p>{text}</p>

      {type === "drop-down" && <DropDownArrow />}
    </div>
  );
};

export default NavItem;
