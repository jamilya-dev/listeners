'use strict';

const btn = document.getElementById('btn');
const e_btn = document.getElementById('e_btn');
const square = document.getElementById('square');
const input = document.getElementById('text');
const circle = document.getElementById('circle');
const range = document.getElementById('range');
let color = '';
let size = '';

const squareColor = function () {
  square.style.backgroundColor = color;
  e_btn.style.display = "none";
}

input.addEventListener('change', function (event) {
  color = event.target.value;
})

btn.addEventListener('click', squareColor);

range.addEventListener('input', function (event) {
  size = event.target.value;
  square.style.height = size + '%';
  square.style.width = size + '%';
});




