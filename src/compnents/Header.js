import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-light bg-dark d-flex justify-content-between p-3 align-content-center">
      <div>
        <h2>Logo</h2>
      </div>
      <div className="d-flex">
        <div className="m-auto">
          <NavLink
            activeClassName="navbar__link--active"
            className="text-light text-decoration-none"
            to="/gallery"
          >
            <h4 className="mx-3 ">Gallery </h4>
          </NavLink>
        </div>
        <div className="m-auto">
          <NavLink
            activeClassName="navbar__link--active"
            className="text-light text-decoration-none"
            to="/student"
          >
            <h4 className="mx-3">Student </h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
