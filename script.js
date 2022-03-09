// @ts-nocheck
const DEFAULT_H1 = "Word Writer";
const CAPS_H1 = "CAPS ON";
let isCaps = false;

function addChar(selection) {
  var currChars = document.getElementById("words").value;
  if (selection === "bksp") {
    document.getElementById("words").value = currChars.substring(0, currChars.length - 1);
  } else {
    if (isCaps) {
      selection = selection.toUpperCase();
      isCaps = false;
      document.getElementsByTagName("h1").innerHTML = DEFAULT_H1;
    }
    document.getElementById("words").value = currChars.concat(selection);
  }
}
function enter() {
  var content = document.getElementById("words").value;
  console.log(content);
  document.getElementById("words").value = "";
}
function caps() {
  isCaps = true;
  document.getElementsByTagName("h1").innerHTML = CAPS_H1;
}
