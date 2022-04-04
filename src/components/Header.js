import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {


  render() {
    return (
      <header className="flex">
        <div className="logo-holder">
          <FontAwesomeIcon icon={faBook}  size="xl" color="white"/>
          <span className="logo-name">Dashboard</span>
        </div>
        <div>
          <input className="header-input" type="search" placeholder="Search Documentation"/>
        </div>
      </header>
    )
  }
}

export default Header;