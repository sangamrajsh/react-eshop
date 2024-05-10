import React from "react"
import logo from "../favicon.ico"

export default function Footer(){
    return(
        <section className="container-fluid bg-dark text-white mt-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4 py-2 text-center">
                        <img className="me-2" src={logo} alt="Footer Logo" width="25px"/>Rajesh Bazaar
                    </div>
                    <div className="col-sm-12 col-md-4 py-2 text-center">
                        <a className="link-light text-decoration-none" rel="noreferrer" href="http://sangamrajsh.me" target="_blank">
                            sangamrajsh.me
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-4 py-2 text-center">
                        <a className="text-white text-decoration-none" rel="noreferrer" href="https://sangamrajsh.github.io/" target="_blank">
                            Github Page
                        </a>
                    </div>
                </div>    
            </div>
            
        </section>
    )
}