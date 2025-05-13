// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: Apr 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(6 * Math.random()) + 1
function checkNumber() {
  let e = parseInt(document.getElementById("user-number").value)
  e === randomNumber
    ? (document.getElementById("result").innerHTML =
        "<p>You have guessed the correct number!</p>")
    : (document.getElementById("result").innerHTML =
        "<p>You have guessed the wrong number!<br/>The correct number was: " +
        randomNumber +
        "</p>")
}
