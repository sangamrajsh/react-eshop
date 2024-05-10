import React from "react"
import logo from "../assets/logo-blue.png"
import heroimg from "../assets/hero-img.png"

export default function Header(){
    return(
        <header className="header">
            <nav className="container-fluid py-3">
                <div className="container">
                <div className="row">
                    <div className="col d-flex  flex-row align-items-center justify-content-start ">
                        <img className="logo--img" src={logo} alt="Logo"/>
                    </div>
                </div>
                </div>
            </nav>
            <div className="container hero--div">
                <div className="d-flex flex-lg-row-reverse flex-column align-items-center">
                    <div className="col-12 col-lg-7">
                        <img className="img-fluid" src={heroimg} alt="Hero"/>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="fs-1">Oneline Shopping Experience</div>
                        <p className="fs-4">Join 10000s of other customers, for unique shopping expereince on your fingers' tips. </p>
                    </div>
                </div>
                
            </div>
        </header>
    )
};