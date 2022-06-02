"use strict";

const container = document.querySelector(".container");
const color = document.querySelector(".color");
const btn = document.querySelector(".btn");

// array of colors
const colorArr = ["blue", "green", "pink", "black", "brown", "red"];

btn.addEventListener("click", function () {
  // to generate random colours
  const random = Math.floor(Math.random() * colorArr.length);
  const colorRand = colorArr[random];
  document.body.style.backgroundColor = colorRand;
  color.textContent = colorRand;
});
