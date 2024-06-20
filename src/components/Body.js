import RestaurantCard  from "./RestaurantCard";
import React from "react";
import {useState, useEffect} from "react";



const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    
    useEffect(()=>{
       
        fetchData();
    }, []);

    const fetchData = async () => {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.437973605399232&lng=73.86362334666698"
        
            )        
        const json = await data.json();

        console.log("json", json);

        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       

    }
  
    return(
      <div className="body">
        <div className="filter">
        <button 
        className="filter-btn" 
        onClick={()=>{
            const filteredList = listOfRestaurant.filter(
                (res)=> res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList); 
            }}
        > Top Rated Restaurant</button></div>
        <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
          ))}
       
        </div>
      </div>
    );
  };

  export default Body;