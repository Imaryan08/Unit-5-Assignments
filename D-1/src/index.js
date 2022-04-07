import "./index.css";
import img from '../img/note.png';

let icon = document.createElement('img');
icon.src = img;
document.querySelector('.icon').append(icon);



var todoArr = [];
createTable();
document.querySelector("form").addEventListener("submit", function () {
  event.preventDefault();
  var itemName = document.querySelector(".itemName").value;
  var itemQty = document.querySelector(".itemQty").value;

  if (itemName.length && itemQty.length) {
    var obj = { itemName: itemName, itemQty: itemQty };
    todoArr.push(obj);
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
    document.querySelector(".itemName").value = "";
    document.querySelector(".itemQty").value = "";
    createTable();
    document.querySelector("span").style.display = "block";
    document.querySelector("span").style.animation = "example 4s";
  }
});

function createTable() {
  todoArr = JSON.parse(localStorage.getItem("todoArr")) || [];

  document.querySelector("tbody").innerText = "";
  todoArr.map(function (elem, index) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.innerText = index + 1;
    td2.innerText = elem.itemName;
    td3.innerText = elem.itemQty;
    td4.innerHTML = "<h3> DELETE <h3>";
    td4.setAttribute("class", "delBtn");

    tr.append(td1, td2, td3, td4);
    document.querySelector("tbody").append(tr);

    td4.addEventListener("click", function () {
      todoArr = JSON.parse(localStorage.getItem("todoArr"));
      todoArr.splice(index, 1);
      localStorage.setItem("todoArr", JSON.stringify(todoArr));
      createTable();
      // document.querySelector('span').style.display = 'block';
      // document.querySelector('span').style.color = 'red';
      // document.querySelector('span').innerText = 'Data deleted Successfully!';                  //span : display none
    });
  });
}
