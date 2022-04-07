// import "../src/index.css";
import "./index.css";

let root = document.querySelector(".root");

let heading = document.createElement("h1");
heading.innerHTML = 'Welcome to React';
heading.classList.add('red');

root.append(heading);
