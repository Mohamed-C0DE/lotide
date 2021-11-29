const assertEqual = require("../assertEqual");
const head = require("../head");

const arr = [0, 1];
const first = head(arr);

assertEqual(first, 0);
