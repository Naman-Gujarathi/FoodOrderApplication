import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponenet from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import RestaurantCardComponent from "./components/RestaurantCardComponent";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://penji.co/wp-content/uploads/2022/08/10.-mr.-d-food-logo.jpg"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>AboutUs</li>
          <li>ContactUs</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// destrucutring props on the fly
const RestaurantCard = (props) => {
  // console.log(props)
  const {resData} = props
  const {
    name, 
    cuisines, 
    costForTwo, 
    deliveryTime
  } = resData?.data;
  

  return(
    <div className="res-card" style={{
      backgroundColor: "#f0f0f0"
   
   }}>
     
      <img 
      className="res-logo"
      alt="res-logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTce1b5VicNYLH1o9YfJkArHUg01yyvA90igA&s"></img>
       <h3>{name}</h3>
       <h4>{cuisines.join(", ")}</h4>
       <h4>Rating {resData.avgRating}</h4>
       <h4>${costForTwo / 100} For TWO</h4>
       <h4>Delivery Time {deliveryTime}</h4>
    </div>
  )
}
const resList = [{
  type: "restaurant",
  data: {
    type: "F",
    id: "33475",
    name: "KFC",
    uuid: "kjsdbfaksdnfald;ksnf",
    city: "1",
    areas: "eafdjlfd-sdlgnsfg-sflksndf",
    cuisines: ["Chiceken pops", "Sandwhich", "Popcorn", "Coke", "KFC bucket"],
    costForTwo: 4000,
    deliveryTime: 36,
    slaString: "36 Min",
    lastMileTravel: 3.5
  }, 
   cityState: "1",
   address: "fjskldjf, dkjfd",
   veg: false,
   avgRating: "3.8"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "33476",
      name: "Meghna Foods",
      uuid: "kjsdbfaksdnfald;ksnf",
      city: "1",
      areas: "eafdjlfd-sdlgnsfg-sflksndf",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 5000,
      deliveryTime: 36,
      slaString: "36 Min",
      lastMileTravel: 3.5
    }, 
     cityState: "1",
     address: "fjskldjf, dkjfd",
     veg: false,
     avgRating: "3.4"
    }, 
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "33477",
        name: "Chipotle",
        uuid: "kjsdbfaksdnfald;ksnf",
        city: "1",
        areas: "eafdjlfd-sdlgnsfg-sflksndf",
        cuisines: ["Burrito Bowl", "Coldrink", "Veg Bowl"],
        costForTwo: 5000,
        deliveryTime: 36,
        slaString: "30 Min",
        lastMileTravel: 3.5
      }, 
       cityState: "1",
       address: "fjskldjf, dkjfd",
       veg: false,
       avgRating: "3.3"
      },
      {
        type: "restaurant",
        data: {
          type: "F",
          id: "33478",
          name: "Subway",
          uuid: "kjsdbfaksdnfald;ksnf",
          city: "1",
          areas: "eafdjlfd-sdlgnsfg-sflksndf",
          cuisines: ["Veggie Delite", "Classic Pizza", "Coke"],
          costForTwo: 5000,
          deliveryTime: 36,
          slaString: "16 Min",
          lastMileTravel: 3.5
        }, 
         cityState: "1",
         address: "fjskldjf, dkjfd",
         veg: false,
         avgRating: "3.7"
        }, {
          type: "restaurant",
          data: {
            type: "F",
            id: "33479",
            name: "Burger King",
            uuid: "kjsdbfaksdnfald;ksnf",
            city: "1",
            areas: "eafdjlfd-sdlgnsfg-sflksndf",
            cuisines: [" Veg Burger", "Chicken Burger", "Snacks", "Fast Food"],
            costForTwo: 2500,
            deliveryTime: 36,
            slaString: "30 Min",
            lastMileTravel: 3.5
          }, 
           cityState: "1",
           address: "fjskldjf, dkjfd",
           veg: false,
           avgRating: "3.4"
          },
          {
            type: "restaurant",
            data: {
              type: "F",
              id: "33480",
              name: "McDonalds",
              uuid: "kjsdbfaksdnfald;ksnf",
              city: "1",
              areas: "eafdjlfd-sdlgnsfg-sflksndf",
              cuisines: ["Veggie Pattie Burger", "Fries", "Ice-cream", "Snacks"],
              costForTwo: 2000,
              deliveryTime: 36,
              slaString: "26 Min",
              lastMileTravel: 3.5
            }, 
             cityState: "1",
             address: "fjskldjf, dkjfd",
             veg: false,
             avgRating: "3.4"
            }];

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
      {
        resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>
        ))}
     
      </div>
    </div>
  );
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);

// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "this is react code")
// console.log(heading);  // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading= React.createElement("h1", {}, "This is React Code");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// const heading = React.createElement("h1", {id: "head", naman:"gujarathi"}, "This is software code");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement(
//     "div",{
//     id: 'root'},
//     [React.createElement( "div",  {id:'child'}, [React.createElement( "h1",  {}, "I am H00 tag"),React.createElement( "h2", {},  "I am H1 tag") ] ),
//     React.createElement( "div",{id:'child2'},[React.createElement("h1",{},"I am H2 tag"),React.createElement( "h2", {},"I am H2 tag") ]
//     )]
// );
// console.log(parent)
// const root1 = ReactDOM.createRoot(document.getElementById("abc"));
// root1.render(parent);

// const Jsxheading = () => <h1 className="heading">Hello World</h1>;

// console.log(jsxheading);
// const root = ReactDOM.createRoot(document.getElementById("abc"));

// const HeadingComponent = () => {
//   return (
//     <div>
//       <Jsxheading />
//       <h1>Namaste React Component</h1>
//     </div>
//   );
// };

// const NamanComponent = () =>  <HeadingComponent/>

// const styleCard = {
//     backgroundColor : "#f0f0f0"
// }
