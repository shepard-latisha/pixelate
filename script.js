// Your code here
let chosenColor = "red";
const table = document.getElementsByTagName("table")[0];
const addRowButton = document.getElementById("add-row");
const select = document.getElementsByTagName("select");

function makeRow() {
  const row = document.createElement("tr");

  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }

  table.appendChild(row);
}

addRowButton.addEventListener("click", makeRow);

function colorize(event) {
  const target = event.target;
  if (target.className.length) {
    target.className = "";
  } else {
    target.className = chosenColor;
  }
}

table.addEventListener("click", colorize);

select.addEventListener("change", function (event) {
  chosenColor = event.target.className;
});
