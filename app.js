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


const parent = React.createElement(
    "div",{
    id: 'root'}, 
    [React.createElement( "div",  {id:'child'}, [React.createElement( "h1",  {}, "I am H1 tag"),React.createElement( "h2", {},  "I am H1 tag") ] ), 
    React.createElement( "div",{id:'child2'},[React.createElement("h1",{},"I am H2 tag"),React.createElement( "h2", {},"I am H2 tag") ]
    )]
);  
console.log(parent)
const root1 = ReactDOM.createRoot(document.getElementById("abc"));
root1.render(parent);

