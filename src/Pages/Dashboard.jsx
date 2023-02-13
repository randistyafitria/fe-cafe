// import {useState, useEffect} from "react";
// import axios from "axios";
import Navbar from "../Components/Navbar"


export default function Dashboard() {
    return <div className="row col-lg-12">
        <div className="col-lg-2 m-4"><Navbar /></div>
        {/* <div className="col-lg-8 m-4 card">
            <div className="card-header rounded-3 bg-white">
                <h2 className="fw-bold">Hi, Brodi!</h2>
            </div>
        </div> */}
        
        <section class="dashboard">
        <div class="top">
            <i class="uil uil-bars sidebar-toggle"></i>

            <div class="search-box">
                <i class="uil uil-search"></i>
                <input type="text" placeholder="Search here..."/>
            </div>
            
            {/* <!--<img src="images/profile.jpg" alt="">--> */}
        </div>

        <div class="dash-content">
            <div class="overview">
                <div class="title">
                    <span class="text">Dashboard</span>
                </div>

                <div class="boxes">
                    <div class="box box1">
                        <span class="text">Total Likes</span>
                        <span class="number">50,120</span>
                    </div>
                    <div class="box box2">
                        <span class="text">Comments</span>
                        <span class="number">20,120</span>
                    </div>
                    <div class="box box3">
                        <span class="text">Total Share</span>
                        <span class="number">10,120</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    
  
}