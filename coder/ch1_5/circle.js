"use strict";
let canvas = document.getElementById("circle");
canvas.width = 440;
canvas.height = 360;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.font = 'bold 16px Consolas';

function drawCircle(radius, angle)
{
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const a = -angle * Math.PI / 180;
  let x = canvas.width / 2 + radius * Math.cos(a);
  let y = canvas.height / 2 + radius * Math.sin(a);
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(x, y);
  ctx.lineWidth = 1.0;
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = "#2F5FFF";
  ctx.strokeStyle = "#2F5FFF";
  ctx.lineWidth = 4;
  ctx.arc(canvas.width / 2, canvas.height / 2, radius, a, 0, false);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(x, y, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
  ctx.arc(canvas.width / 2, canvas.height / 2, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillText("(0, 0)", canvas.width / 2 + 5, canvas.height / 2 + 14);
  ctx.closePath();
  ctx.fillStyle = "red";
  ctx.fillText("(x, y)", x + 5, y + 14);
}

function getRadius()
{
  const slide = document.getElementById("radius");
  let r = slide.value;

  const txt = document.getElementById("val-r");
  txt.innerHTML = (r / 20).toFixed(1);

  return r;
}

function getAngle()
{
  const slide = document.getElementById("angle");
  let a = slide.value;

  const txt = document.getElementById("val-ang");
  txt.innerHTML = a.toString().padStart(3, "\u00A0");

  return a;
}

function manageSliders()
{
  const radius = getRadius();
  const angle = getAngle();
  drawCircle(radius, angle);
}

manageSliders();

let rad = document.getElementById("radius");
rad.addEventListener("change", manageSliders);
rad.addEventListener("input", manageSliders);

let ang = document.getElementById("angle");
ang.addEventListener("change", manageSliders);
ang.addEventListener("input", manageSliders);
