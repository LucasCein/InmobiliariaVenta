import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navBar.css"
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand mr-auto ms-5" href="/home">
                <img src="https://png.pngtree.com/element_our/sm/20180413/sm_5ad0c062c709e.jpg" style={{ width: "60px" }} alt="Logo" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/home" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/propiedades/venta" activeClassName="active">Comprar</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/propiedades/alquiler" activeClassName="active">Alquilar</NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
