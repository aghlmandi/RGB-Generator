const cmdRandom = document.querySelector(".button-random");

const bodyData = document.querySelector("body");
const lblColor = document.querySelector(".color-code");
const txtcolors = document.querySelectorAll(".colors");

let colorRed, colorGreen, colorBlue;

randomColorChange();

cmdRandom.addEventListener("click", randomColorChange);

function randomColorChange() {
  colorRed = randomGenerator(255);
  colorGreen = randomGenerator(255);
  colorBlue = randomGenerator(255);
  colorPlate = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
  filler();
}

txtcolors.forEach(function (i) {
  i.addEventListener("input", function () {
    colorPickup();
  });
});

function randomGenerator(lastNumber) {
  return Math.floor(Math.random() * lastNumber);
}

function colorPickup() {
  colorPlate = "";
  txtcolors.forEach(function (item) {
    if (item.id === "txtred") {
      colorRed = item.value;
    } else if (item.id === "txtgreen") {
      colorGreen = item.value;
    } else if (item.id === "txtblue") {
      colorBlue = item.value;
    }
  });
  colorPlate = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
  filler();
}

function filler() {
  let counter = 0;
  txtcolors.forEach(function (item) {
    if (item.id === "txtred") {
      item.value = colorRed;
    } else if (item.id === "txtgreen") {
      item.value = colorGreen;
    } else if (item.id === "txtblue") {
      item.value = colorBlue;
    }
  });
  bodyData.style.backgroundColor = colorPlate;
  lblColor.innerText = colorPlate;
}
