import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHome, faNewspaper, faSortAlphaAsc, faUser } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends React.Component {


  render() {
    return (
      <aside>
        <ul className="nav-holder">
          <NavLink activeclassname="active" to="/">
            <li className="nav">
              <FontAwesomeIcon icon={faHome}  size="lg" color="white"/>
              <span>Home</span>
            </li>
          </NavLink>
          <NavLink activeclassname="active" to="/articles">
            <li className="nav">
              <FontAwesomeIcon icon={faSortAlphaAsc}  size="lg" color="white"/>
              <span>Articles</span>
            </li>
          </NavLink>
          <NavLink activeclassname="active" to="/books">
            <li className="nav">
              <FontAwesomeIcon icon={faBook}  size="lg" color="white"/>
              <span>Books</span>
            </li>
          </NavLink>
          <NavLink activeclassname="active" to="/people">
            <li className="nav">
              <FontAwesomeIcon icon={faUser}  size="lg" color="white"/>
              <span>People</span>
            </li>
          </NavLink>
          <NavLink activeclassname="active" to="/help">
            <li className="nav">
              <FontAwesomeIcon icon={faNewspaper}  size="lg" color="white"/>
              <span>Help & Support</span>
            </li>
          </NavLink>
      </ul>
      </aside>
    )
  }
}

export default Sidebar;