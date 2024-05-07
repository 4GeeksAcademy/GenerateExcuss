/* eslint-disable */
//import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello from the console!");

  let who = ["el Perro", "el gato", "la lluvia"];
  let action = ["se comió", "orino", "mojo"];
  let what = ["la tarea", "la casa", "el carro"];
  let when = [
    "ayer",
    "cuando dormia",
    "durante el almuerzo",
    "a la hora del ejercicio"
  ];

  let generateExcuse = () => {
    let whoIndex = [Math.floor(Math.random() * who.length)];
    let actionIndex = [Math.floor(Math.random() * action.length)];
    let whatIndex = [Math.floor(Math.random() * what.length)];
    let whenIndex = [Math.floor(Math.random() * when.length)];

    return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
  };

  document.querySelector("#excuse").textContent = generateExcuse();
};
