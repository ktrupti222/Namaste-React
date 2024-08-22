const header = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!!"
); //returns object

const root = ReactDOM.createRoot(document.getElementById("root"));

const childDiv = React.createElement("div", { id: "child" }, [
  header,
  React.createElement("h2", {}, "I am h2"),
]);
const childDiv1 = React.createElement("div", { id: "child1" }, [
  header,
  React.createElement("h2", {}, "I am h2"),
]);
const pdiv = React.createElement("div", { id: "parent" }, [
  childDiv,
  childDiv1,
]);
root.render(pdiv);
