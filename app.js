const heading = React.createElement("h1", {Id: "heading"}, "hello world from React, sumit this side");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement("div", 
{Id: "parent"}, [
    React.createElement("div", {Id: "child1"}, [
       React.createElement("h1", {}, "my name is sumit"),
       React.createElement("p", {}, "kumar sharma")
  ]),
    React.createElement("div", {Id: "child2"}, [
       React.createElement("h1", {}, "this is 2nd child"),
       React.createElement("p", {}, "ye hai second child")
  ])
]);

root.render(parent);