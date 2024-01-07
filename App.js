import React from "react";
import ReactDOM from "react-dom";
const heading  = React.createElement("h1",{
    id:"heading"
},"Hello world from React");
const parent  = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{
            id:"heading1"
        },"H1 tag child1"),React.createElement("h2",{
            id:"heading"
        },"By aksahya saini")
    ]),React.createElement("div",{id:"child2"},[
        React.createElement("h1",{
            id:"heading1"
        },"H1 tag child2"),React.createElement("h1",{
            id:"heading"
        },"H1 tag child2")
    ])
])
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent)
root.render(parent)