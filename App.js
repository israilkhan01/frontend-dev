import React from "react";
import ReactDOM from "react-dom/client";
const heading  = React.createElement("h1",{
    id:"heading"
},"Hello world from React");
const parent  = React.createElement("h1",{id:"parent"},
"Hello React developer")

//JSX  - used to create React Element (like html element)
const jsxHeading = <h1>Welcome to JSX inside React </h1>;


//React Component
//React composition
const HeadingComponent = ()=>{
    return (
        <div className="container">
            {jsxHeading}
            <h1>Welcome to React Component</h1>
        </div>
    )
}
console.log(jsxHeading)
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(HeadingComponent)
root.render(<HeadingComponent/>)