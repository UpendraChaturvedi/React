// for creating nexte.js app
// <div id="parent">
//     <div id="child">
//         <h1>Iam a h1 tag</h1>
//     </div>
// </div>

// below is code
const parent1=React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {}, "Iam a h1 tag")));

//  For creating siblings
// <div id="parent">
//     <div id="child">
//     <h1></h1>
//     <h2></h2>   
//     </div>
// </div>
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Iam a h1 tag"),
    React.createElement("h2", {}, "Iam a h2 tag")]
  )
);



const heading = React.createElement("h1", {id: "heading"}, "Hello World");
// <!-- creating react root -->

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

root.render(parent);

// <!-- rendering the react element -->
