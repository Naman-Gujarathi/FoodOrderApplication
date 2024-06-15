import RestaurantCardComponent from "./RestaurantCardComponent";
import { resdata, listOfRestaurant1 } from "../utlis/mockdata";
import { SWIGGY_API } from "../utlis/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  console.log("Inside Body Component starts")
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  // console.log("****listOfRestaurant*****", listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    console.log("json ", json);
    setListOfRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      "son ",
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log("listOfRestaurant", listOfRestaurant);

  if(listOfRestaurant.length === 0) {
      return <Shimmer></Shimmer>
  }

  return (
    <div className="body">
      <div className="head">
        <div className="search">Search</div>
        <button
          className="btn"
          onClick={() => {
            const filterlistOfRestaurant = listOfRestaurant.filter(
              (restaurant) => restaurant?.info?.avgRating > 4
            );
            console.log("clicked", filterlistOfRestaurant);
            setListOfRestaurant(filterlistOfRestaurant);
          }}
          onMouseOver={() => {
            console.log("Hover");
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      {/* {console.log("ye hi p chaiye ", listOfRestaurant)} */}
      {/* {listOfRestaurant.map((restaurant) => (console.log("list of restaurant ", restaurant)))} */}

      <div className="res-container">
        {listOfRestaurant.map((restaurant) => {
          return (
            <RestaurantCardComponent
              key={restaurant?.info?.id}
              resobj={restaurant}
            ></RestaurantCardComponent>
          );
        })}

        {/* <RestaurantCardComponent resobj={resdata} /> */}
        {/* <RestaurantCardComponent resName="KFC" cuisine="Burger"/> */}
      </div>
    </div>
  );
 
};

export default BodyComponent;
