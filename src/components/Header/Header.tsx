import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <nav className={style.container}>
        <Link to="/">Home</Link> | <Link to="/characters">Characters</Link>
      </nav>
    </div>
  );
};

export default Header;
