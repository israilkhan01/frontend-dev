import React from "react";
import ReactDOM from "react-dom";
const heading  = React.createElement("h1",{
    id:"heading"
},"Hello world from React");
const parent  = React.createElement("h1",{id:"parent"},
"Hello React developer")

//JSX  - used to create React Element (like html element)
const jsxHeading = <h1>Welcome to JSX inside React </h1>;


//React Component
const HeadingComponent = ()=>{
    return <h1>Welcome to React Component</h1>
}
console.log(jsxHeading)
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent)
root.render(<HeadingComponent/>)