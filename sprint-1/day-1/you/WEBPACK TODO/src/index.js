// import "../index.html"
import "./index.css";

import image1 from "../image/picture.jpg";

//image creation
let image = document.createElement("img");
image.setAttribute("id", "picture");
image.src = image1;

// append
document.getElementById("annya").append(image);

let btn = document.querySelector("#btn");
btn.setAttribute("class", "submit_btn");

let form = document.querySelector("form");
form.setAttribute("class", "taskForm");

document.querySelector("#submit").addEventListener("submit", (e) => {
  e.preventDefault();
  let task_name = document.querySelector("#task").value;
  let id = Math.floor(Math.random() * 10) + 1;
  append(task_name, id);
});

function append(task, id) {
  let row = document.createElement("tr");
  row.setAttribute("class", "row");

  let td1 = document.createElement("td");

  let td2 = document.createElement("td");

  let td3 = document.createElement("td");

  let button = document.createElement("button");
  button.textContent = "Delete";
  button.setAttribute("id", "deletebtn");

  td1.textContent = task;
  td2.textContent = id;
  td3.append(button);

  row.append(td2, td1, td3);

  document.querySelector("tbody").append(row);
}
