/*window.alert("1");

window.prompt("What your name?");

window.confirm("How are you?");

window.setInterval();

window.setTimeout();*/

const heading = document.getElementById("hello");
//const heading2 = document.getElementsByTagName("h2")[0];
//const heading2 = document.getElementsByClassName("h2-class")[0];
console.log(heading2);
setTimeout(() => {
  addStylesTo(heading);
}, 3000);

function addStylesTo(node) {
  node.textContent = "Changed from JS";
  node.style.color = "red";
  node.style.textAlign = "center";
  node.style.backgroundColor = "blue";
}


