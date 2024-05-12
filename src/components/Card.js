import React from "react"
import star from "../assets/star.png"


export default function Card(props){

    const available = props.item.available;

return(
        <div className="col-sm-12 col-md-6 col-lg-3 shadow card--div mt-4" >
            <div className="image--div">
                {available === "Available" ?
                (<div className="availability fw-bold text-white available">Available</div>
                ):(<div className="availability fw-bold text-white soldout">Soldout</div>)}
                </div>
       <img src={require(`/src/assets/${props.item.img}`)} className="card--image" alt="Card"/>
            <div className="m-2">
                    <div className="card--info d-flex mb-2">
                        <img src={star} className="star" alt="Rating"/>
                        <span className="text-body ms-1">{props.item.stats.rating}</span>
                            <span className="ms-1">({props.item.stats.reviewCount})</span>
                        <span className="text-muted fw-bold  ms-1">.</span>
                        <span className="text-muted  ms-1">{props.item.country}</span>
                    </div>
                    <div className="pb-2">
                        <span className="">{props.item.name}</span>
                    </div>
                    <div className="text-muted  ms-1">{props.item.size}</div>
            </div>
            </div> 
        )
}