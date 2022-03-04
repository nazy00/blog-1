// @ts-nocheck
const DEFAULT_H1 = "Word Writer";
const CAPS_H1 = "CAPS ON";
let isCaps = false;

function addChar(selection) {
  var currChars = $("#words").val();
  if (selection === "bksp") {
    $("#words").val(currChars.substring(0, currChars.length - 1));
  } else {
    if (isCaps) {
      selection = selection.toUpperCase();
      isCaps = false;
      $("h1").html(DEFAULT_H1);
    }
    $("#words").val(currChars.concat(selection));
  }
}
function enter() {
  var content = $("#words").val();
  console.log(content);
  $("#words").val("");
}
function caps() {
  isCaps = true;
  $("h1").html(CAPS_H1);
}
