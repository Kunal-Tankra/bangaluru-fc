import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarLinks = () => {
    

    return (
        <>
            <div className="collapse navbar-collapse" id="navbarNavDropdown" >

                <ul className="navbar-nav">

                    {/* news */}
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            NEWS
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="dropdown-item" to="topics/club-news/">ANNOUNCEMENTS</NavLink></li>
                        </ul>
                    </li>

                    {/* club */}
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            CLUB
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="dropdown-item" to="/club/">TEAM CLUB</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/owners/">Owners</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/managers/">The Managers</NavLink></li>
                        </ul>
                    </li>

                    {/* first team */}
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            FIRST TEAM
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="dropdown-item" to="first-team/squad/">Squad</NavLink></li>
                        </ul>
                    </li>



                    {/* academy */}
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ACADEMY
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="dropdown-item" to="topics/academy/">ACADEMY NEWS</NavLink></li>
                            <li><NavLink className="dropdown-item" to="academy/under-18/">UNDER-18</NavLink></li>
                            <li><NavLink className="dropdown-item" to="academy/under-15/">UNDER-15</NavLink></li>
                            <li><NavLink className="dropdown-item" to="academy/under-13/">UNDER-13</NavLink></li>
                        </ul>
                    </li>



                    {/* login */}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/member-login/">LOGIN</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavbarLinks
