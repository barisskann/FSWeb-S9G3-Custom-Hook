import React from "react";
import Hook from "./Hook";

const Navbar = (props) => {
  const toggleMode = (e) => {
    Hook(!props.geceModu);
    e.preventDefault();
    props.setGeceModu(!props.geceModu);
  };

  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.geceModu ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
