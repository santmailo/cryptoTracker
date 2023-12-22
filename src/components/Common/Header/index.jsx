// import React from 'react'
import "./styles.css";
import MobileMenu from "./MobileMenu";
import Button from "../Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/">
          <p className="link">Compare</p>
        </Link>
        <Link to="/">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button
            text="Dashboard"
            onClick={() => console.log("clicked")}
            outlineBtn={false}
          />
        </Link>
      </div>

      <div className="mobile-drawer">
        <MobileMenu />
      </div>
    </div>
  );
}

export default Header;
