// @ts-nocheck
const $ = (id) => document.querySelector(id);
const $_ = (id) => document.querySelectorAll(id);

const staticData = {
  kbdFocus: null,
  shiftOn: false,

  addChar(selection) {
    let words = this.kbdFocus ? this.kbdFocus : $("#editbox");
    let currChars = words.value;
    if (selection === "del") {
      words.value = currChars.substring(
        0,
        currChars.length - 1
      );
    } else {
      if (this.shiftOn) {
        selection = selection.toUpperCase();
        shiftOn = !shiftOn;
      }
      words.value = currChars.concat(selection);
    }
  },

  sp: {
    shift: "shift",
    delete: "delete",
    return: "return",
    space: "space",
  },

  glyphs: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    '"',
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ".",
    "?",
    ",",
  ],
};
