import React from "react"
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home-heading">🚀 Welcome to Homepage!</h1>
      <div>
        <ul className="home-nave-holder flex "> 
          <NavLink activeclassname="active" to="/articles">
              <li className="home-nav">
                <span>ARTICLES PAGE</span>
              </li>
            </NavLink>
            <NavLink activeclassname="active" to="/books">
              <li className="home-nav">
                <span>BOOKS PAGE</span>
              </li>
            </NavLink>
            <NavLink activeclassname="active" to="/people">
              <li className="home-nav">
                <span>PEOPLE PAGE</span>
              </li>
            </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Home;