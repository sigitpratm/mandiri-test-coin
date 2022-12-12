import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="shadow-sm">
      <div className="menu container py-4">
        <Link className="menu-item" to={"/"}>Home</Link>
      </div>
    </div>
  );
}

export default Navbar;
