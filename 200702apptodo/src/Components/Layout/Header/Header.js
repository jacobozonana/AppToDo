import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              
            </li>

            <li className="nav-item">
             
                <Link className="nav-link" to="/create">
                  Crear ToDo
                </Link>
              
            </li>

            <li className="nav-item">
             
                <Link className="nav-link" to="/hechos">
                  Hechos
                </Link>
              
            </li>

          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
