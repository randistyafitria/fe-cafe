import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import "./Navbar.css";

export default function Navbar(props) {
  let Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location = "/login";
  };

  return (
    <div>
      <div className="sidebar open">
        <div className="logo-details">
          <div className="illustration text-center mx-auto">
            <img src="assets/img/LogoW.png" width="50%"/>
          </div>
        </div>
        <ul className="nav-list">
          <li>
            <Link id="dashboard" to="/" className="nav-link">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link id="menu" to="/menu" className="nav-link">
              <i className="bx bx-user"></i>
              <span className="links_name">Menu</span>
            </Link>
          </li>
          <li>
            <Link id="meja" to="/meja" className="nav-link">
              <i className="bx bx-chat"></i>
              <span className="links_name">Meja</span>
            </Link>
          </li>
          <li>
            <Link id="transaksi" to="/transaksi" className="nav-link">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Transaksi</span>
            </Link>
          </li>
          <li>
            <Link id="user" to="/user" className="nav-link">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">User</span>
            </Link>
          </li>
          <li className="profile">
            <div className="profile-details">
              {/* <!--<img src="profile.jpg" alt="profileImg">--> */}
              <div className="name_job">
                <div className="name">Prem Shahi</div>
                <div className="job">Web designer</div>
              </div>
            </div>           
            <Link id="log_out" to="/login" className="nav-link">
                <i className="bx bx-log-out" ></i>
            </Link>            
          </li>
        </ul>
      </div>
    </div>
  );
}