const cmdRandom = document.querySelector(".button-random");
const bodyData = document.querySelector("body");
const lblColor = document.querySelector(".color-code");
const lblHexColor = document.querySelector(".color-hex");
const txtcolors = document.querySelectorAll(".colors");
const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let colorRed, colorGreen, colorBlue, hexCode;

randomColorChange();

cmdRandom.addEventListener("click", randomColorChange);

function randomColorChange() {
  colorRed = randomGenerator(255);
  colorGreen = randomGenerator(255);
  colorBlue = randomGenerator(255);
  colorPlate = `RGB(${colorRed}, ${colorGreen}, ${colorBlue})`;
  hexCode = rgbToHex(colorRed, colorGreen, colorBlue);
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
  colorPlate = `RGB(${colorRed}, ${colorGreen}, ${colorBlue})`;
  hexCode = rgbToHex(colorRed, colorGreen, colorBlue);
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
  lblHexColor.innerText = hexCode;
}

function rgbToHex(r, g, b) {
  let hex = `Hex: #${hexArray[Math.trunc(r / 16)]}${hexArray[r % 16]}${
    hexArray[Math.trunc(g / 16)]
  }${hexArray[g % 16]}${hexArray[Math.trunc(b / 16)]}${hexArray[b % 16]}`;
  return hex;
}
