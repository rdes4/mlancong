import { Component } from "react";
// import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems.js";
import "./NavbarStyle.css";

class Navbar extends Component {
  state = { clicked: false };

  hadleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Mlancong</h1>

        <div className="menu-icons" onClick={this.hadleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href="/" className={item.className}>
                  <i class={item.icon}></i> {item.title}
                </a>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
