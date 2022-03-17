/**
 * @author Ebuka Okpala
 * Date: 06/12/2021
 */

import React, {Component} from 'react'
import { NavLink } from "react-router-dom";

class Header extends Component {

    handleClick() {
      // Only apply when the hamburger icon is visible i.e on smaller screens
      if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <= 575) {
          const navList = document.getElementsByClassName("nav-list")[0];
          navList.classList.toggle("expand");
          const body = document.getElementsByTagName("body")[0];
          body.classList.toggle('bd-overflow');
        }
    }

    render() {
        return (
          <div className="header-container">
            <header className="navbar navbar-expand-sm navbar-light fixed-top header">
                <nav className="nav-container container-xxl">
                  <NavLink to="/" className="navbar-brand">EAGER SaTC</NavLink>
                  <button onClick={() => this.handleClick()} className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                    <ul onClick={() => this.handleClick()} className="nav-list navbar-nav flex-row">
                      <li className="nav-item col-md-auto">
                        <NavLink to="/home" className="nav-link">Home</NavLink>
                      </li>
                      <li className="nav-item col-md-auto">
                        <NavLink to="/labs" className="nav-link">Labs</NavLink>
                      </li>
                      <li className="nav-item col-md-auto"> 
                        <NavLink to="/publications" className="nav-link">Publications</NavLink>
                      </li>
                      <li className="nav-item col-md-auto">
                        <NavLink to="/about" className="nav-link">About</NavLink>
                      </li>
                    </ul>
                </nav>
            </header>
            <div className="hero-bg">
              <div>
                <h3 className="hero-title">
                  SaTC-EDU: Learning Platform and Education Curriculum for AI-Driven Socially-Relevant Cybersecurity
                </h3>
              </div>
            </div>
          </div>
        );
      }
  }

export default Header