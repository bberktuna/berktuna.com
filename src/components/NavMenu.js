import React from "react"
import { NavLink } from "react-router-dom"

const NavMenu = () => {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <NavLink> </NavLink>{" "}
        </li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default NavMenu
