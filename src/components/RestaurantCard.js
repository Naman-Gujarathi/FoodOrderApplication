import React from "react";
import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props)
    const {resData} = props
    const {
      name, 
      cuisines, 
      costForTwo, 
      deliveryTime,
      cloudinaryImageId,
      avgRating
    } = resData?.info;
    
  
    return(
      <div className="res-card" style={{
        backgroundColor: "#f0f0f0"
     
     }}>
       
        <img 
        className="res-logo"
        alt="res-logo"
        src={cloudinaryImageId}></img>
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>Rating {avgRating}</h4>
         <h4>${costForTwo}</h4>
         <h4>Delivery Time {deliveryTime}</h4>
      </div>
    )
  }

  export default RestaurantCard