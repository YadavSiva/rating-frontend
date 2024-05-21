import React, { useState } from "react"
import "./header.css"
import { Link } from "react-router-dom"
import electrician from './../../src/assets/ele.jpg'
import TUTOR from './../../src/assets/tut.png'
import restaurent from './../../src/assets/res1.jpg'
import PLUMBER from './../../src/assets/plu.jpg'
import GYM from './../../src/assets/GYM1.jpg'
import hotell from './../../src/assets/hot2.jpg'
import beauty from './../../src/assets/beauty1.jpg'
import hospital from './../../src/assets/hospital.png'
import cardcar from './../../src/assets/car2.jpg'
import restaurant from './../../src/assets/resss.jpg'
import packers from './../../src/assets/route4car.jpg'
import carrepair from './../../src/assets/edu.jpg'
export function HeaderComponent() {
  return (
    <section >
      <div>
  <header className="header">
    <h1 className="site-title">Find Dubai</h1>
    <div className="auth-links">
      <Link to="/signup" className="auth-link">Signup</Link>
      <Link to="/login" className="auth-link">Login</Link>
    </div>
  </header>
</div>

      <br /><br />
      <div className="cards-parent">
        <div className="cards1">
          <button><img src={electrician} className="img-tutor" /></button>
          <p className="word-electri">Electrician</p>
        </div>

        <div className="cards1">
          <button><img src={TUTOR} className="img-tutor" /></button>
          <p className="word-tutor">Tutor</p>
        </div>

        <div className="cards1">
          <button><img src={restaurent} className="img-tutor" /></button>
          
             <p className="word-electri"> Restaurant</p> 
        </div>

        <div className="cards1">
          <button><img src={hotell} className="img-tutor" /></button>
         
            <p className="word-tutor">Hotels</p> 
        </div>

        <div className="cards1">
          <button><img src={PLUMBER} className="img-tutor" /></button>
          <p className="word-tutor">Plumber</p>
        </div>

        <div className="cards1">
          <button><img src={GYM} className="img-tutor" /></button>
          <p className="word-gym">Gym</p>
        </div>

        <div className="cards1">
          <button><img src={beauty} /></button>
          <p className="word-education">Beauty&nbsp;&&nbsp;Spa</p>
        </div>

        <div className="cards1">
          <button><img src={hospital} /></button>
          <p className="word-tutor">Hospitals</p>
        </div>

      </div>

      <div class="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="menu-section-heading">Most Popular Catagory </h1>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="shadow menu-item-card p-3 mb-3">
                <img src={hotell} class="menu-item-image w-100" />
                <h3 class="menu-card-title">Hotel</h3>
                <a href="/car" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="shadow menu-item-card p-3 mb-3">
                <img src={restaurant} class="menu-item-image w-100" />
                <h3 class="menu-card-title">Restaurant</h3>
                <Link to="/restaurant" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="menu-item-card shadow p-3 mb-3">
                <img src={packers} class="menu-item-image w-100" />
                <h3 class="menu-card-title">Travel</h3>
                <a href="" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="menu-item-card shadow p-3 mb-3">
                <img src={carrepair} class="menu-item-image w-100" />
                <h3 class="menu-card-title">education</h3>
                <a href="" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}







































