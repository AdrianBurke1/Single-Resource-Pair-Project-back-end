import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react';
export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  function toggleNav() {
    setNavOpen(!navOpen);
  }
  return (
    <>
      <nav>
        <h1>
          <Link className="title" to="/">
            <span className="g">G</span>amify
          </Link>
        </h1>
        {/* <img src="https://img.itch.zone/aW1nLzMwMDMyODcuZ2lm/315x250%23cm/ZltYcb.gif" alt="Logo" className="logo" /> */}
        <button className="button">
          <Link to="/games/new">New Game</Link>
        </button>
        <button className="button2">
          <Link to="/games">Games</Link>
        </button>
      </nav>
      <div className={navOpen ? "overlay open" : "overlay"}>
        <div className="overlay-content">
          <Link className="overlay-link" to="/playstation">Playstation</Link>
          <Link className="overlay-link" to="/xbox">Xbox</Link>
          <Link className="overlay-link" to="/about">About</Link>
        </div>
      </div>
      <span className="hamburger" onClick={toggleNav}>
        &#9776;
      </span>
    </>
  );
}