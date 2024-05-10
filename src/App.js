import React from "react"
import Header from "./components/Header.js"
import Card from "./components/Card.js"
import Footer from "./components/Footer"
import cola from "./assets/cola.png"
import pepsi from "./assets/pepsi.png"
import sprite from "./assets/sprite.png"
import faxekondi from "./assets/faxekondi.png"




export default function App(){
    return(
        <div>
        <Header/>
            <div className="container">
                <h1 className="mb-5 text-center">Our Products</h1>
             <div className="d-flex justify-content-evenly row">
                <Card
                    available="Available"
                    img={cola}
                    rating={4.1}
                    country="Norway"
                    name="Coca Cola Normal"
                    size="33cl"
                />
                <Card
                    available="Soldout"
                    img={pepsi}
                    rating={4.2}
                    country="Sweden"
                    name="Pepsi Max"
                    size="33cl"
                />
                <Card
                    available="Soldout"
                    img={sprite}
                    rating={4}
                    country="Finland"
                    name="Sprit Normal"
                    size="1.5 ltr"
                    
                />
                <Card
                    available="Available"
                    img={faxekondi}
                    rating={4.7}
                    country="Denmark"
                    name="Faxe Kondi"
                    size="1.5 ltr"
                />
                
             </div>
            </div>
        <Footer/>
        </div>
    )
}