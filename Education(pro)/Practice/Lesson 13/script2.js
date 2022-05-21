"use strict";

wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("mousedown", () => {
  console.log("Mousedown");
});

wrapper.addEventListener("mouseup", () => {
  console.log("Mouseup");
});

wrapper.addEventListener("click", () => {
  console.log("Click");
});

wrapper.addEventListener("mousemove", () => {
  console.log("mousemove");
});

wrapper.addEventListener("mouseenter", () => {
  console.log("mouseenter");
});

wrapper.addEventListener("mouseleave", () => {
  console.log("mouseleave");
});



document.addEventListener("keydown", (event) => {
  console.log('keydown', event);
}) 