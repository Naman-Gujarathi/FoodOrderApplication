import { CDN_URL} from "../utlis/constants";

const RestaurantCardComponent = (props) => {
    console.log("props ", props)
    const {name, avgRating, cuisines,  deliveryTime, locality  } = props?.resobj?.info ?? {}
    
    // console.log(`cuisine {cuisine}`)
    return (
            <div className="foodcard" >
                <h2>Restaurant: {name}</h2>
                <img className = "cardimage" src= {CDN_URL} />
                <h4>{cuisines.join(", ")}</h4>
                <h4>Avg Rating : {avgRating}</h4>
                <h4>{deliveryTime}</h4>
                <h4>Locality: {locality }</h4>
            </div>   
      
    )
}

export default RestaurantCardComponent;