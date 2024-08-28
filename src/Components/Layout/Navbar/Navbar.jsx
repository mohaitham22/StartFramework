
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import style from './Navbar.module.css'

export default function Navbar() {
 
  return (
    <>
      <nav class={` navbar navbar-expand-lg ${style.test}`}>
  <div class="container">
    <Link class="navbar-brand list-unstyled fw-bolder text-white fs-3 " to={''}>START FRAMEWORK</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link fw-bold me-3 text-white active" aria-current="page" to={'about'}>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link fw-bold me-3 text-white" to={'portfolio'}>Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link fw-bold me-3 text-white" to={'contacts'}>Contact</Link>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
