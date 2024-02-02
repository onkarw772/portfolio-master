import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="index.html" class="navbar-brand d-block d-lg-none">
                    <h1 class="text-primary fw-bold m-0">Portfolio</h1>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        {/* <a href="#home" class="nav-item nav-link active">Home</a>
                        <a href="#about" class="nav-item nav-link">About</a>
                        <a href="#skill" class="nav-item nav-link">Skills</a>
                        <a href="#service" class="nav-item nav-link">Services</a> */}
                        <Link to="/" class="nav-item nav-link active">Home</Link>
                        <Link to="/about" class="nav-item nav-link">About</Link>
                        <Link to="/skill" class="nav-item nav-link">Skills</Link>
                        <Link to="/service" class="nav-item nav-link">Services</Link>
                    </div>
                    <a href="index.html" class="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
                        <h1 class="text-primary fw-bold m-0">Portfolio</h1>
                    </a>
                    <div class="navbar-nav me-auto py-0">
                        {/* <a href="#project" class="nav-item nav-link">Projects</a>
                        <a href="#team" class="nav-item nav-link">Team</a>
                        <a href="#testimonial" class="nav-item nav-link">Testimonial</a>
                        <a href="#contact" class="nav-item nav-link">Contact</a> */}
                        <Link to="/project" class="nav-item nav-link active">Projects</Link>
                        <Link to="/team" class="nav-item nav-link">Team</Link>
                        <Link to="/testimonial" class="nav-item nav-link">Testimonial</Link>
                        <Link to="/contact" class="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
          
        </div>
    )
}
