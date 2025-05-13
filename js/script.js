// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: May 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1
function checkNumber() {
  const e = parseInt(document.getElementById("user-number").value),
    t = document.getElementById("result")
  e === randomNumber
    ? (t.innerHTML = "<p>You guessed the correct number!</p>")
    : (t.innerHTML = `<p>You guessed wrong!<br/>The correct number was: ${randomNumber}</p>`)
}

