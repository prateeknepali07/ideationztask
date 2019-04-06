import React, { Component } from "react";
import ReactDOM from "react-dom";
import M from "materialize-css/dist/js/materialize.min.js";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper blue darken-3 ">
            <a href="#!" class="brand-logo rigth-align">
              <img
                id="logo"
                src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-logo-top.png"
                alt="Cololib"
                className="logo-img lazyloading"
                data-no-retina="data-no-retina"
                data-was-processed="true"
              />
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">About Us</a>
              </li>
              <li>
                <a href="badges.html">Service</a>
              </li>
              <li>
                <a href="collapsible.html">Portfolio</a>
              </li>
              <li>
                <a href="mobile.html">Team</a>
              </li>
            </ul>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">
                  <i class="material-icons">search</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">
              <i class="material-icons">search</i>
            </a>
          </li>
          <li>
            <a href="sass.html">About Us</a>
          </li>
          <li>
            <a href="badges.html">Service</a>
          </li>
          <li>
            <a href="collapsible.html">Portfolio</a>
          </li>
          <li>
            <a href="mobile.html">Team</a>
          </li>
        </ul>
      </div>
    );
  }
}
