
let root = document.querySelector(".root");
console.log('root:', root)

let h1 = document.createElement("h1");
h1.innerHTML = "Hello Webpack";
h1.classList.add('coral');

root.append(h1);
