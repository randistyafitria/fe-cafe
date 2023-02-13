import { useState, useEffect } from "react"; // untuk menyimpan inputan
import { Link } from "react-router-dom";
import axios from "axios"; // digunakan untuk transfer data dari frontend ke backend
import React from "react";
import Navbar from "../Components/Navbar";

export default function Login() {
  // define state to store username
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let loginProcess = (ev) => {
    ev.preventDefault(); //
    // akses ke backend untuk proses login
    // method : POST
    // endpoint : http://localhost:8000/user/auth
    // request : username and password
    // response : logged and token

    //prepare request
    let request = {
      username: username,
      password: password,
    };
    // prepare alamat
    let endpoint = `http://localhost:8080/user/auth`;
    // sending data
    axios.post(endpoint, request).then((response) => {
        // response.data.(apa yang ingin diambil)
        if (response.data.logged === true) {
          let token = response.data.token;
          // disimpan di local storage
          localStorage.setItem(`token`, token);

          let dataUser = JSON.stringify(response.data);
          localStorage.setItem(`user`, dataUser);

          alert("Login Successfull");
          window.location = "./";
        } else {
          alert("Sorry, Login not successfull!");
        }
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container content d-flex h-100 justify-content-center align-items-center mt-5">
      <div
        className="content col-sm-6 mt-5 rounded-3 shadow p-3 mb-5 rounded"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="card-header bg-transparent text-light text-center mt-3 mb-3">
          <h1>
          <strong className="text-dark mb-5">Login</strong>
          <div className="logo-details">
          <div className="illustration text-center mx-auto">
            <img src="assets/img/LogoW.png" width="30%"/>
          </div>
        </div>
            {/* <b>OKRent</b> */}
          </h1>
          <strong className="text-dark mb-5">Wikusama Cafe</strong>
        </div>
        
        <div className="card-body text-black">

          <form onSubmit={
            (event) => loginProcess(event)
            }>

            <h5 className="mt-5">Username</h5>
            <div class="input-group input-group-lg">
            <input
              type="text"
              class="form-control"
              value={username}
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)} required
            />
            </div>
            <h5 className="mt-3">Password</h5>
            <div class="input-group input-group-lg">
            <input
              type="password"
              className="form-control"
              value={password}
              placeholder="Masukkan Password"
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="false" required
            />
            </div>
            <button
              className="form-control btn btn-dark btn-custom btn-lg btn-block mt-5"
              type="submit">
              <b>Log In</b>
            </button>
          </form>
          <h5 className="text-center mt-5">
            <Link id="signup" to="/signup" className="nav-link">
              Don't have an account? Sign Up here.
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}