import React from 'react'
import logo from './Images/logo.png'
import './Navbar.css'

const Navbar = () => {
return ( 
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark navs fixed-top"> 
 <div className="container p-2">
    <a className="navbar-brand" href="#">
      Mobile Hub
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navmenu"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navmenu">
      <ul className="navbar-nav mx-auto items">

        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Brands</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Support</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Cart</a>
        </li>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search by brand" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

    </div>
  </div>
</nav>

)
}

export default Navbar
