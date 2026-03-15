import React from 'react'
import logo from './Images/logo.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if(search.trim() !== ""){
      navigate(`/brand/${search.toLowerCase()}`);
    }
    
  };
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

            <NavLink to="/" className="nav-link">
              Home
            </NavLink>

            <NavLink to="/brand" className="nav-link">
              Brands
            </NavLink>

            <NavLink to = "/cart" className="nav-link">
             Cart
            </NavLink>

            

          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input onChange={(e) => setSearch(e.target.value)} className="form-control me-2" type="search" value={search} placeholder="Search by brand" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit"
            >Search</button>
          </form>

        </div>
      </div>
    </nav>

  )
}

export default Navbar
