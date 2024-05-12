import React from "react"
import Header from "./components/Header.js"
import Card from "./components/Card.js"
import Footer from "./components/Footer"
import product from "./product.js"



export default function App(){
    const card = product.map(item => {
        return <Card 
        key = {item.id}
        item = {item}
       
        
        />
    })
    return(
        <div>
        <Header/>
            <div className="container">
                <h1 className="mb-5 text-center">Our Products</h1>
             <div className="d-flex justify-content-evenly row">
                {card}
             </div>
            </div>
        <Footer/>
        </div>
    )
}