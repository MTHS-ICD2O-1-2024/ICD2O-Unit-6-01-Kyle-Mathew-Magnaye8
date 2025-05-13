// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: May 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1;

function checkNumber() {
  const userGuess = parseInt(document.getElementById("user-number").value);
  const result = document.getElementById("result");

  if (userGuess === randomNumber) {
    result.innerHTML = "<p>You guessed the correct number!</p>";
  } else {
    result.innerHTML = `<p>You guessed wrong!<br/>The correct number was: ${randomNumber}</p>`;
  }
}